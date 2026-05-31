import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useSuspenseQuery, useQuery, useMutation } from '@tanstack/react-query';
import { getProduct } from '#/serverActions/products/product.api';
import { checkoutProduct } from '#/serverActions/billing/order.api';
import { getConfigurationOptions } from '#/serverActions/configuration/configuration.api';
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card';
import { Button } from '#/components/ui/button';
import { Label } from '#/components/ui/label';
import { Input } from '#/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '#/components/ui/select';
import { ArrowLeft, ArrowRight, Check, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';
export const Route = createFileRoute('/configure/$productId')({
    component: ConfigureProductPage,
});
const STEPS = ['Configure', 'Billing', 'Payment'];
function StepIndicator({ step }) {
    return (<div className="flex items-center gap-0 mb-8">
      {STEPS.map((label, i) => {
            const done = i < step;
            const active = i === step;
            return (<div key={label} className="flex items-center">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${done ? 'bg-primary/20 text-primary' :
                    active ? 'bg-primary text-primary-foreground' :
                        'bg-muted text-muted-foreground'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${done ? 'bg-primary text-primary-foreground' :
                    active ? 'bg-primary-foreground text-primary' :
                        'bg-muted-foreground/20 text-muted-foreground'}`}>
                {done ? <Check className="w-3 h-3"/> : i + 1}
              </span>
              {label}
            </div>
            {i < STEPS.length - 1 && (<div className={`h-px w-8 mx-1 ${i < step ? 'bg-primary' : 'bg-border'}`}/>)}
          </div>);
        })}
    </div>);
}
function ConfigureProductPage() {
    const { productId } = Route.useParams();
    const navigate = useNavigate();
    const { data: product } = useSuspenseQuery({
        queryKey: ['product', productId],
        queryFn: () => getProduct({ data: { id: productId } }),
    });
    const specs = product.specs;
    const specOptions = specs?.options ?? [];
    const { data: configOptions = [] } = useQuery({
        queryKey: ['config-options', product.category],
        queryFn: () => getConfigurationOptions({ data: { category: product.category } }),
    });
    const [step, setStep] = useState(0);
    // Step 0: Configure
    const [selectedOption, setSelectedOption] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [billingPeriod, setBillingPeriod] = useState('MONTHLY');
    const [configValues, setConfigValues] = useState({});
    // Step 1: Billing info
    const [billingName, setBillingName] = useState('');
    const [billingEmail, setBillingEmail] = useState('');
    const [billingPhone, setBillingPhone] = useState('');
    const configReady = (specOptions.length === 0 || !!selectedOption) &&
        configOptions.filter((o) => o.required).every((o) => !!configValues[o.id]?.trim());
    const billingReady = billingName.trim().length > 0 && billingEmail.trim().length > 0;
    const configPriceModifier = configOptions.reduce((sum, opt) => {
        const val = opt.values.find((v) => v.value === configValues[opt.id]);
        return sum + (val?.priceModifier ?? 0);
    }, 0);
    const PERIOD_MULTIPLIER = { MONTHLY: 1, QUARTERLY: 3, YEARLY: 12 };
    const basePrice = (product.price + configPriceModifier) * quantity;
    const periodPrice = basePrice * (PERIOD_MULTIPLIER[billingPeriod] ?? 1);
    const checkoutMutation = useMutation({
        mutationFn: () => checkoutProduct({
            data: {
                productId,
                quantity,
                billingPeriod,
                configuration: { ...(selectedOption ? { option: selectedOption } : {}), ...configValues },
                billingName: billingName.trim(),
                billingEmail: billingEmail.trim(),
                billingPhone: billingPhone.trim() || undefined,
            },
        }),
        onSuccess: (result) => {
            if (!result.success || !result.data) {
                toast.error(result.message || 'Failed to create order');
                return;
            }
            const { orderId, razorpayOrderId } = result.data;
            if (!razorpayOrderId) {
                toast.error('Payment gateway unavailable. Contact support.');
                return;
            }
            navigate({
                to: '/checkout/payment',
                search: { orderId, razorpayOrderId },
            });
        },
        onError: () => toast.error('Failed to create order'),
    });
    const periodLabel = {
        MONTHLY: 'Monthly', QUARTERLY: 'Quarterly (3mo)', YEARLY: 'Yearly (12mo)',
    };
    return (<main className="min-h-screen bg-muted/30 py-10 px-4">
      <div className="max-w-4xl mx-auto mt-20">
        <Button variant="ghost" size="sm" className="mb-6" onClick={() => navigate({ to: '/pricing/minecraft' })}>
          <ArrowLeft className="w-4 h-4 mr-2"/> Back to Plans
        </Button>

        <StepIndicator step={step}/>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2">
            {step === 0 && (<Card>
                <CardHeader>
                  <CardTitle>Configure Your {product.planName}</CardTitle>
                  <p className="text-sm text-muted-foreground">Customize your order details</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Billing Period <span className="text-destructive">*</span></Label>
                    <Select value={billingPeriod} onValueChange={(v) => setBillingPeriod(v)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="MONTHLY">Monthly</SelectItem>
                        <SelectItem value="QUARTERLY">Quarterly (3 months)</SelectItem>
                        <SelectItem value="YEARLY">Yearly (12 months)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Quantity <span className="text-destructive">*</span></Label>
                    <Input type="number" min="1" max="10" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}/>
                  </div>

                  {specOptions.length > 0 && (<div className="space-y-3">
                      <Label>Server Type <span className="text-destructive">*</span></Label>
                      {specOptions.map((opt) => (<div key={opt.id} onClick={() => setSelectedOption(opt.value)} className={`p-4 border rounded-lg cursor-pointer transition-colors ${selectedOption === opt.value
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'}`}>
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${selectedOption === opt.value ? 'border-primary' : 'border-muted-foreground'}`}>
                              {selectedOption === opt.value && <div className="w-2 h-2 rounded-full bg-primary"/>}
                            </div>
                            {opt.icon && (<img src={opt.icon} alt="" className="w-8 h-8 rounded object-contain shrink-0" onError={(e) => { e.target.style.display = 'none'; }}/>)}
                            <div>
                              <p className="font-medium">{opt.label}</p>
                              {opt.description && <p className="text-sm text-muted-foreground mt-0.5">{opt.description}</p>}
                            </div>
                          </div>
                        </div>))}
                    </div>)}

                  {configOptions.length > 0 && (<div className="space-y-5">
                      {configOptions.map((opt) => (<div key={opt.id} className="space-y-2">
                          <Label>
                            {opt.label}
                            {opt.required && <span className="text-destructive ml-1">*</span>}
                          </Label>
                          {opt.description && (<p className="text-xs text-muted-foreground">{opt.description}</p>)}
                          {(opt.type === 'SELECT') && (<Select value={configValues[opt.id] ?? ''} onValueChange={(v) => setConfigValues((prev) => ({ ...prev, [opt.id]: v }))}>
                              <SelectTrigger>
                                <SelectValue placeholder={`Select ${opt.label}`}/>
                              </SelectTrigger>
                              <SelectContent>
                                {opt.values.map((v) => (<SelectItem key={v.id} value={v.value}>
                                    {v.label}
                                    {v.priceModifier !== 0 && (<span className="ml-2 text-xs text-muted-foreground">
                                        {v.priceModifier > 0 ? '+' : ''}₹{v.priceModifier}
                                      </span>)}
                                  </SelectItem>))}
                              </SelectContent>
                            </Select>)}
                          {(opt.type === 'RADIO') && (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                              {opt.values.map((v) => {
                            const icon = v.metadata?.icon;
                            const isSelected = configValues[opt.id] === v.value;
                            return (<button key={v.id} type="button" onClick={() => setConfigValues((prev) => ({ ...prev, [opt.id]: v.value }))} className={`flex items-center gap-4 px-4 py-4 rounded-xl border text-left transition-all w-full ${isSelected
                                    ? 'border-primary bg-primary/5 shadow-sm'
                                    : 'border-border hover:border-primary/50 hover:bg-muted/40'}`}>
                                    {icon && (<img src={icon} alt="" className="w-10 h-10 object-contain shrink-0" onError={(e) => { e.target.style.display = 'none'; }}/>)}
                                    <div className="flex-1 min-w-0">
                                      <p className="text-sm font-semibold truncate">{v.label}</p>
                                      {v.description && (<p className="text-xs text-muted-foreground truncate mt-0.5">{v.description}</p>)}
                                      {v.priceModifier !== 0 && (<p className="text-xs font-medium text-primary mt-0.5">
                                          {v.priceModifier > 0 ? '+' : ''}₹{v.priceModifier}
                                        </p>)}
                                    </div>
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${isSelected ? 'border-primary bg-primary' : 'border-muted-foreground/40'}`}>
                                      {isSelected && <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3}/>}
                                    </div>
                                  </button>);
                        })}
                            </div>)}
                          {(opt.type === 'TEXT') && (<Input value={configValues[opt.id] ?? ''} onChange={(e) => setConfigValues((prev) => ({ ...prev, [opt.id]: e.target.value }))} placeholder={opt.description ?? opt.label}/>)}
                          {(opt.type === 'NUMBER') && (<Input type="number" value={configValues[opt.id] ?? ''} onChange={(e) => setConfigValues((prev) => ({ ...prev, [opt.id]: e.target.value }))} placeholder={opt.description ?? '0'}/>)}
                        </div>))}
                    </div>)}

                                    <Button className="w-full" disabled={!configReady} onClick={() => setStep(1)}>
                    Continue <ArrowRight className="w-4 h-4 ml-2"/>
                  </Button>
                </CardContent>
              </Card>)}

            {step === 1 && (<Card>
                <CardHeader>
                  <CardTitle>Billing Information</CardTitle>
                  <p className="text-sm text-muted-foreground">Used for your invoice and order confirmation</p>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="space-y-2">
                    <Label>Full Name <span className="text-destructive">*</span></Label>
                    <Input placeholder="John Doe" value={billingName} onChange={(e) => setBillingName(e.target.value)}/>
                  </div>
                  <div className="space-y-2">
                    <Label>Email Address <span className="text-destructive">*</span></Label>
                    <Input type="email" placeholder="john@example.com" value={billingEmail} onChange={(e) => setBillingEmail(e.target.value)}/>
                    <p className="text-xs text-muted-foreground">Invoice and confirmation will be sent here</p>
                  </div>
                  <div className="space-y-2">
                    <Label>Phone Number <span className="text-muted-foreground text-xs">(optional)</span></Label>
                    <Input type="tel" placeholder="+91 98765 43210" value={billingPhone} onChange={(e) => setBillingPhone(e.target.value)}/>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" className="flex-1" onClick={() => setStep(0)}>
                      <ArrowLeft className="w-4 h-4 mr-2"/> Back
                    </Button>
                    <Button className="flex-1" disabled={!billingReady} onClick={() => setStep(2)}>
                      Review Order <ArrowRight className="w-4 h-4 ml-2"/>
                    </Button>
                  </div>
                </CardContent>
              </Card>)}

            {step === 2 && (<Card>
                <CardHeader>
                  <CardTitle>Review & Pay</CardTitle>
                  <p className="text-sm text-muted-foreground">Confirm your order before proceeding to payment</p>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="rounded-lg border border-border divide-y divide-border">
                    <div className="px-4 py-3 flex justify-between text-sm">
                      <span className="text-muted-foreground">Plan</span>
                      <span className="font-medium">{product.planName}</span>
                    </div>
                    {selectedOption && (<div className="px-4 py-3 flex justify-between text-sm">
                        <span className="text-muted-foreground">Type</span>
                        <span className="font-medium">{specOptions.find(o => o.value === selectedOption)?.label}</span>
                      </div>)}
                    <div className="px-4 py-3 flex justify-between text-sm">
                      <span className="text-muted-foreground">Billing</span>
                      <span className="font-medium">{periodLabel[billingPeriod]}</span>
                    </div>
                    <div className="px-4 py-3 flex justify-between text-sm">
                      <span className="text-muted-foreground">Quantity</span>
                      <span className="font-medium">{quantity}</span>
                    </div>
                  </div>

                  <div className="rounded-lg border border-border divide-y divide-border">
                    <div className="px-4 py-3 flex justify-between text-sm">
                      <span className="text-muted-foreground">Name</span>
                      <span className="font-medium">{billingName}</span>
                    </div>
                    <div className="px-4 py-3 flex justify-between text-sm">
                      <span className="text-muted-foreground">Email</span>
                      <span className="font-medium">{billingEmail}</span>
                    </div>
                    {billingPhone && (<div className="px-4 py-3 flex justify-between text-sm">
                        <span className="text-muted-foreground">Phone</span>
                        <span className="font-medium">{billingPhone}</span>
                      </div>)}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" className="flex-1" onClick={() => setStep(1)} disabled={checkoutMutation.isPending}>
                      <ArrowLeft className="w-4 h-4 mr-2"/> Back
                    </Button>
                    <Button className="flex-1" size="lg" onClick={() => checkoutMutation.mutate()} disabled={checkoutMutation.isPending}>
                      {checkoutMutation.isPending ? (<><Loader2 className="w-4 h-4 mr-2 animate-spin"/> Creating Order...</>) : (<>Pay ₹{periodPrice.toLocaleString()}</>)}
                    </Button>
                  </div>

                  <p className="text-xs text-center text-muted-foreground">
                    You will be redirected to Razorpay to complete payment securely.
                  </p>
                </CardContent>
              </Card>)}
          </div>

          {/* Sticky summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Plan</span>
                  <span className="font-medium">{product.planName}</span>
                </div>
                {selectedOption && (<div className="flex justify-between">
                    <span className="text-muted-foreground">Type</span>
                    <span className="font-medium">{specOptions.find(o => o.value === selectedOption)?.label}</span>
                  </div>)}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Qty</span>
                  <span>{quantity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Billing</span>
                  <span>{periodLabel[billingPeriod]}</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-bold text-base">
                  <span>Total</span>
                  <span>₹{periodPrice.toLocaleString()}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  ₹{product.price.toLocaleString()}/mo × {quantity} × {PERIOD_MULTIPLIER[billingPeriod]} mo
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>);
}
//# sourceMappingURL=$productId.js.map