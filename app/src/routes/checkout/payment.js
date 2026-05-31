import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useQuery, useMutation } from '@tanstack/react-query';
import { getOrder, updateOrderStatus } from '@/serverActions/billing/order.api';
import { getRazorpayKeyId } from '@/serverActions/admin/orders.api';
import { generateInvoice } from '@/serverActions/invoice/invoice.api';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { toast } from 'sonner';
export const Route = createFileRoute('/checkout/payment')({
    component: PaymentPage,
    validateSearch: (search) => ({
        orderId: search.orderId,
        razorpayOrderId: search.razorpayOrderId,
    }),
});
function PaymentPage() {
    const navigate = useNavigate();
    const { orderId, razorpayOrderId } = Route.useSearch();
    const [paymentStatus, setPaymentStatus] = useState('idle');
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const { data: order, isLoading } = useQuery({
        queryKey: ['order', orderId],
        queryFn: () => getOrder({ data: { orderId } }),
        enabled: !!orderId,
    });
    const { data: razorpayKeyId } = useQuery({
        queryKey: ['razorpay-key'],
        queryFn: () => getRazorpayKeyId(),
    });
    const invoiceMutation = useMutation({
        mutationFn: (data) => generateInvoice({ data }),
    });
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        script.onload = () => setScriptLoaded(true);
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    const handlePayment = () => {
        if (!scriptLoaded || !order || !razorpayOrderId || !razorpayKeyId) {
            toast.error('Payment system not ready');
            return;
        }
        setPaymentStatus('processing');
        const options = {
            key: razorpayKeyId,
            amount: order.totalAmount * 100,
            currency: 'INR',
            name: 'Flame Nodes',
            description: `Order #${orderId.slice(0, 8).toUpperCase()}`,
            order_id: razorpayOrderId,
            handler: async function (response) {
                setPaymentStatus('success');
                toast.success('Payment successful!');
                try {
                    await updateOrderStatus({ data: { orderId, status: 'PAID' } });
                }
                catch (error) {
                    console.error('Failed to update order status:', error);
                }
                try {
                    await invoiceMutation.mutateAsync({
                        orderId,
                        razorpayData: response,
                    });
                }
                catch (error) {
                    console.error('Failed to generate invoice:', error);
                }
                setTimeout(() => {
                    navigate({ to: '/user/orders', search: { paymentSuccess: true, orderId } });
                }, 2000);
            },
            prefill: {
                email: order.user?.email || '',
                name: order.user?.name || '',
            },
            theme: {
                color: '#f97316',
            },
            modal: {
                ondismiss: function () {
                    setPaymentStatus('failed');
                    toast.error('Payment cancelled');
                },
            },
        };
        const razorpay = new window.Razorpay(options);
        razorpay.on('payment.failed', function (response) {
            setPaymentStatus('failed');
            toast.error('Payment failed: ' + response.error.description);
        });
        razorpay.open();
    };
    if (isLoading) {
        return (<div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary"/>
      </div>);
    }
    if (!order) {
        return (<div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="pt-6 text-center">
            <XCircle className="w-12 h-12 text-destructive mx-auto mb-4"/>
            <h2 className="text-xl font-semibold mb-2">Order Not Found</h2>
            <p className="text-muted-foreground mb-4">The order you're looking for doesn't exist.</p>
            <Button onClick={() => navigate({ to: '/' })}>Go Home</Button>
          </CardContent>
        </Card>
      </div>);
    }
    return (<div className="min-h-screen flex items-center justify-center p-4 bg-muted/30">
      <Card className="max-w-lg w-full">
        <CardHeader>
          <CardTitle className="text-center">Complete Your Payment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {paymentStatus === 'success' ? (<div className="text-center py-8">
              <CheckCircle2 className="w-16 h-16 text-success mx-auto mb-4"/>
              <h3 className="text-xl font-semibold mb-2">Payment Successful!</h3>
              <p className="text-muted-foreground">Redirecting to dashboard...</p>
            </div>) : paymentStatus === 'failed' ? (<div className="text-center py-8">
              <XCircle className="w-16 h-16 text-destructive mx-auto mb-4"/>
              <h3 className="text-xl font-semibold mb-2">Payment Failed</h3>
              <p className="text-muted-foreground mb-4">Please try again or contact support.</p>
              <Button onClick={() => setPaymentStatus('idle')}>Retry Payment</Button>
            </div>) : (<>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Order ID</span>
                  <span className="font-mono">#{orderId.slice(0, 8).toUpperCase()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Items</span>
                  <span>{order.items.length} item{order.items.length !== 1 ? 's' : ''}</span>
                </div>
                {order.items.map((item, idx) => (<div key={idx} className="pl-4 text-sm text-muted-foreground">
                    • {item.productName} × {item.quantity}
                  </div>))}
                <div className="border-t pt-3 flex justify-between font-semibold">
                  <span>Total Amount</span>
                  <span className="text-lg">₹{order.totalAmount.toLocaleString()}</span>
                </div>
              </div>

              <Button className="w-full" size="lg" onClick={handlePayment} disabled={!scriptLoaded || paymentStatus === 'processing'}>
                {paymentStatus === 'processing' ? (<>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin"/>
                    Processing...
                  </>) : (`Pay ₹${order.totalAmount.toLocaleString()}`)}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Secure payment powered by Razorpay
              </p>
            </>)}
        </CardContent>
      </Card>
    </div>);
}
//# sourceMappingURL=payment.js.map