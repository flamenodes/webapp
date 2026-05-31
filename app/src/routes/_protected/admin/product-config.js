import { createFileRoute } from '@tanstack/react-router';
import { useSuspenseQuery, useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { getProducts, updateProductConfig } from '@/serverActions/admin/product-config.api';
import { getPteroNests, getPteroEggs } from '@/serverActions/pterodactyl/nests';
import { getImageKitAuth } from '@/serverActions/imagekit/get-imagekit-auth';
import { upload } from '@imagekit/react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Settings, Plus, Trash2, Save, Server, Box, Cpu, ImageIcon, Loader2 } from 'lucide-react';
import { useState, useRef } from 'react';
import { toast } from 'sonner';
export const Route = createFileRoute('/_protected/admin/product-config')({
    head: () => ({ meta: [{ title: 'Product Configuration | Admin' }] }),
    component: ProductConfigPage,
});
const CATEGORY_LABELS = {
    MINECRAFT: 'Minecraft',
    VPS: 'VPS',
    VDS: 'VDS',
    WEBHOST: 'Web Hosting',
    DISCORD: 'Discord Bot',
    DDOS_PROT: 'DDoS Protection',
    DEDICATED: 'Dedicated Server',
};
const ALL_CATEGORIES = ['MINECRAFT', 'VPS', 'VDS', 'WEBHOST', 'DISCORD', 'DDOS_PROT', 'DEDICATED'];
function IconUpload({ value, onChange, }) {
    const fileRef = useRef(null);
    const [uploading, setUploading] = useState(false);
    const handleFile = async (e) => {
        const file = e.target.files?.[0];
        if (!file)
            return;
        setUploading(true);
        try {
            const auth = await getImageKitAuth();
            const res = await upload({
                file,
                fileName: file.name,
                useUniqueFileName: true,
                token: auth.token,
                expire: auth.expire,
                signature: auth.signature,
                publicKey: auth.publicKey,
                folder: '/product-options',
            });
            onChange(res.url);
        }
        catch {
            toast.error('Upload failed');
        }
        finally {
            setUploading(false);
            if (fileRef.current)
                fileRef.current.value = '';
        }
    };
    return (<div className="flex items-center gap-2">
      <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile}/>
      <button type="button" onClick={() => fileRef.current?.click()} disabled={uploading} className={`relative w-12 h-12 rounded-lg border-2 border-dashed flex items-center justify-center transition-colors shrink-0 ${value
            ? 'border-primary/40 hover:border-primary'
            : 'border-muted-foreground/30 hover:border-primary/50'}`}>
        {uploading ? (<Loader2 className="w-4 h-4 animate-spin text-muted-foreground"/>) : value ? (<img src={value} alt="" className="w-full h-full rounded-md object-contain p-0.5" onError={(e) => { e.target.style.display = 'none'; }}/>) : (<ImageIcon className="w-4 h-4 text-muted-foreground/50"/>)}
      </button>
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-1.5">
          <Button type="button" variant="outline" size="sm" className="h-7 text-xs" onClick={() => fileRef.current?.click()} disabled={uploading}>
            {uploading ? 'Uploading...' : value ? 'Replace' : 'Upload Icon'}
          </Button>
          {value && (<Button type="button" variant="ghost" size="sm" className="h-7 text-xs text-destructive hover:text-destructive px-2" onClick={() => onChange('')}>
              Remove
            </Button>)}
        </div>
        <p className="text-xs text-muted-foreground">PNG, SVG, WebP · max 2MB</p>
      </div>
    </div>);
}
function ProductConfigPage() {
    const qc = useQueryClient();
    const { data: response } = useSuspenseQuery({
        queryKey: ['admin-products-config'],
        queryFn: () => getProducts(),
    });
    const products = response?.data || [];
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [configOptions, setConfigOptions] = useState([]);
    const [pteroSpecs, setPteroSpecs] = useState({});
    const [selectedNest, setSelectedNest] = useState(null);
    const [activeTab, setActiveTab] = useState('options');
    const { data: nests = [] } = useQuery({
        queryKey: ['ptero-nests'],
        queryFn: () => getPteroNests(),
    });
    const { data: eggs = [] } = useQuery({
        queryKey: ['ptero-eggs', selectedNest],
        queryFn: () => getPteroEggs({ data: { nestId: selectedNest } }),
        enabled: !!selectedNest,
    });
    const updateConfigMutation = useMutation({
        mutationFn: (data) => updateProductConfig({ data }),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['admin-products-config'] });
            toast.success('Configuration saved');
        },
        onError: () => toast.error('Failed to save configuration'),
    });
    const handleProductSelect = (productId) => {
        setSelectedProduct(productId);
        const product = products.find((p) => p.id === productId);
        if (product?.specs && typeof product.specs === 'object') {
            const specs = product.specs;
            setConfigOptions(specs.options || []);
            const ptero = specs.ptero || {};
            setPteroSpecs(ptero);
            if (ptero.nest) {
                setSelectedNest(ptero.nest);
            }
        }
        else {
            setConfigOptions([]);
            setPteroSpecs({});
        }
    };
    const addOption = () => {
        setConfigOptions([
            ...configOptions,
            { id: crypto.randomUUID(), label: '', value: '', description: '' },
        ]);
    };
    const updateOption = (id, field, value) => {
        setConfigOptions(configOptions.map((o) => (o.id === id ? { ...o, [field]: value } : o)));
    };
    const removeOption = (id) => {
        setConfigOptions(configOptions.filter((o) => o.id !== id));
    };
    const updatePtero = (field, value) => {
        const num = value === '' ? undefined : Number(value);
        setPteroSpecs((prev) => ({ ...prev, [field]: num }));
        if (field === 'nest' && num) {
            setSelectedNest(num);
            setPteroSpecs((prev) => ({ ...prev, nest: num, egg: undefined }));
        }
    };
    const save = () => {
        if (!selectedProduct)
            return;
        updateConfigMutation.mutate({
            productId: selectedProduct,
            config: { options: configOptions, ptero: pteroSpecs },
        });
    };
    const selectedProductData = products.find((p) => p.id === selectedProduct);
    const isPteroProduct = selectedProductData?.deployMode === 'PTERODACTYL';
    const groupedProducts = products.reduce((acc, p) => {
        if (!acc[p.category])
            acc[p.category] = [];
        acc[p.category].push(p);
        return acc;
    }, {});
    const availableCategories = ALL_CATEGORIES.filter((c) => groupedProducts[c]?.length);
    return (<main className="flex-1 overflow-y-auto">
      <div className="px-5 py-6 max-w-screen-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Product Configuration</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Configure deployment options and Pterodactyl settings per product
            </p>
          </div>
          <Badge variant="outline" className="text-xs">{products.length} Products</Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Product list */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Products</CardTitle>
              <CardDescription>Select a product to configure</CardDescription>
            </CardHeader>
            <CardContent>
              {availableCategories.length > 0 ? (<Tabs defaultValue={availableCategories[0]}>
                  <TabsList className="flex flex-wrap h-auto gap-1 mb-4">
                    {availableCategories.map((cat) => (<TabsTrigger key={cat} value={cat} className="text-xs">
                        {CATEGORY_LABELS[cat] || cat}
                      </TabsTrigger>))}
                  </TabsList>
                  {availableCategories.map((cat) => (<TabsContent key={cat} value={cat} className="space-y-1 mt-0">
                      {(groupedProducts[cat] || []).map((product) => (<button key={product.id} onClick={() => handleProductSelect(product.id)} className={`w-full text-left p-3 rounded-lg border transition-colors ${selectedProduct === product.id
                        ? 'bg-primary/10 border-primary'
                        : 'hover:bg-muted border-transparent'}`}>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                              {cat === 'MINECRAFT' ? (<Box className="w-4 h-4 text-primary"/>) : (<Server className="w-4 h-4 text-primary"/>)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-sm truncate">{product.planName}</p>
                              <div className="flex items-center gap-1 mt-0.5">
                                <Badge variant="outline" className="text-xs px-1 py-0">
                                  {product.deployMode}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </button>))}
                    </TabsContent>))}
                </Tabs>) : (<p className="text-sm text-muted-foreground text-center py-8">No products found</p>)}
            </CardContent>
          </Card>

          {/* Config editor */}
          <div className="lg:col-span-2 space-y-4">
            {!selectedProduct ? (<Card>
                <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                  <Settings className="w-16 h-16 text-muted-foreground/50 mb-4"/>
                  <h3 className="text-lg font-semibold mb-2">No Product Selected</h3>
                  <p className="text-sm text-muted-foreground max-w-md">
                    Select a product from the list to configure its deployment options
                  </p>
                </CardContent>
              </Card>) : (<>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold">{selectedProductData?.planName}</h2>
                    <p className="text-sm text-muted-foreground">
                      {CATEGORY_LABELS[selectedProductData?.category || ''] || selectedProductData?.category}
                      {' · '}
                      <span className="font-mono">{selectedProductData?.deployMode}</span>
                    </p>
                  </div>
                  <Button onClick={save} disabled={updateConfigMutation.isPending} size="sm">
                    <Save className="w-4 h-4 mr-2"/>
                    {updateConfigMutation.isPending ? 'Saving...' : 'Save All'}
                  </Button>
                </div>

                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList>
                    <TabsTrigger value="options">User Options</TabsTrigger>
                    {isPteroProduct && (<TabsTrigger value="ptero">Pterodactyl</TabsTrigger>)}
                  </TabsList>

                  {/* User-facing options tab */}
                  <TabsContent value="options" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Configuration Options</CardTitle>
                        <CardDescription>
                          Options shown to users on the configure page (e.g. server type, OS).
                          The <strong>Value</strong> field maps to the Pterodactyl egg ID when deploy mode is PTERODACTYL.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {configOptions.length === 0 ? (<div className="text-center py-8 border-2 border-dashed rounded-lg">
                            <p className="text-sm text-muted-foreground mb-3">No options yet</p>
                            <Button onClick={addOption} size="sm">
                              <Plus className="w-4 h-4 mr-2"/>
                              Add First Option
                            </Button>
                          </div>) : (<>
                            {configOptions.map((option, index) => (<Card key={option.id} className="bg-muted/30">
                                <CardContent className="pt-4 space-y-3">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                      {option.icon ? (<img src={option.icon} alt="" className="w-6 h-6 rounded object-contain" onError={(e) => { e.target.style.display = 'none'; }}/>) : (<div className="w-6 h-6 rounded bg-muted border border-dashed border-muted-foreground/30 flex items-center justify-center">
                                          <span className="text-[9px] text-muted-foreground">img</span>
                                        </div>)}
                                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                                        Option {index + 1}
                                      </span>
                                    </div>
                                    <Button variant="ghost" size="sm" onClick={() => removeOption(option.id)} className="h-7 w-7 p-0 text-destructive hover:text-destructive">
                                      <Trash2 className="w-3.5 h-3.5"/>
                                    </Button>
                                  </div>
                                  <div className="grid grid-cols-2 gap-3">
                                    <div className="space-y-1.5">
                                      <Label className="text-xs">Label</Label>
                                      <Input placeholder="e.g. Vanilla, Ubuntu 22.04" value={option.label} onChange={(e) => updateOption(option.id, 'label', e.target.value)} className="h-8 text-sm"/>
                                    </div>
                                    <div className="space-y-1.5">
                                      <Label className="text-xs">
                                        Value
                                        {isPteroProduct && (<span className="ml-1 text-muted-foreground">(egg ID)</span>)}
                                      </Label>
                                      <Input placeholder={isPteroProduct ? 'e.g. 3' : 'e.g. vanilla'} value={option.value} onChange={(e) => updateOption(option.id, 'value', e.target.value)} className="h-8 text-sm"/>
                                    </div>
                                  </div>
                                  <div className="space-y-1.5">
                                    <Label className="text-xs">Icon (optional)</Label>
                                    <IconUpload value={option.icon} onChange={(url) => updateOption(option.id, 'icon', url)}/>
                                  </div>
                                  <div className="space-y-1.5">
                                    <Label className="text-xs">Description (optional)</Label>
                                    <Input placeholder="Brief description shown to users" value={option.description || ''} onChange={(e) => updateOption(option.id, 'description', e.target.value)} className="h-8 text-sm"/>
                                  </div>
                                </CardContent>
                              </Card>))}
                            <Button onClick={addOption} variant="outline" size="sm" className="w-full">
                              <Plus className="w-4 h-4 mr-2"/>
                              Add Option
                            </Button>
                          </>)}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Pterodactyl settings tab */}
                  {isPteroProduct && (<TabsContent value="ptero" className="mt-4 space-y-4">
                      {/* Nest & Egg */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <Box className="w-4 h-4"/>
                            Nest & Egg (Default)
                          </CardTitle>
                          <CardDescription>
                            Default egg used when no user option is selected. If user options have egg IDs as values, those override this.
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label>Nest</Label>
                              <Select value={pteroSpecs.nest?.toString() || ''} onValueChange={(v) => updatePtero('nest', v)}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select nest..."/>
                                </SelectTrigger>
                                <SelectContent>
                                  {nests.map((n) => (<SelectItem key={n.id} value={n.id.toString()}>
                                      {n.name}
                                    </SelectItem>))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label>Default Egg</Label>
                              <Select value={pteroSpecs.egg?.toString() || ''} onValueChange={(v) => updatePtero('egg', v)} disabled={!selectedNest || eggs.length === 0}>
                                <SelectTrigger>
                                  <SelectValue placeholder={selectedNest ? 'Select egg...' : 'Select nest first'}/>
                                </SelectTrigger>
                                <SelectContent>
                                  {eggs.map((e) => (<SelectItem key={e.id} value={e.id.toString()}>
                                      <div>
                                        <span>{e.name}</span>
                                        <span className="ml-2 text-xs text-muted-foreground">#{e.id}</span>
                                      </div>
                                    </SelectItem>))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          {eggs.length > 0 && pteroSpecs.nest && (<div className="rounded-lg border bg-muted/30 p-3">
                              <p className="text-xs font-medium text-muted-foreground mb-2">Available eggs in this nest</p>
                              <div className="space-y-1">
                                {eggs.map((e) => (<div key={e.id} className="flex items-center justify-between text-sm">
                                    <span>{e.name}</span>
                                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded">ID: {e.id}</code>
                                  </div>))}
                              </div>
                              <p className="text-xs text-muted-foreground mt-2">
                                Use these IDs as the <strong>Value</strong> in user options above to map each option to a specific egg.
                              </p>
                            </div>)}
                        </CardContent>
                      </Card>

                      {/* Resource limits */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <Cpu className="w-4 h-4"/>
                            Resource Limits
                          </CardTitle>
                          <CardDescription>
                            Server resource allocation for this product plan.
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 gap-4">
                            {[
                    { key: 'cpu', label: 'CPU (%)', placeholder: '100' },
                    { key: 'memory', label: 'Memory (MB)', placeholder: '1024' },
                    { key: 'swap', label: 'Swap (MB)', placeholder: '0' },
                    { key: 'disk', label: 'Disk (MB)', placeholder: '5120' },
                    { key: 'database', label: 'Databases', placeholder: '1' },
                    { key: 'allocation', label: 'Allocations', placeholder: '1' },
                    { key: 'backups', label: 'Backups', placeholder: '2' },
                ].map(({ key, label, placeholder }) => (<div key={key} className="space-y-1.5">
                                <Label className="text-sm">{label}</Label>
                                <Input type="number" min="0" placeholder={placeholder} value={pteroSpecs[key] ?? ''} onChange={(e) => updatePtero(key, e.target.value)} className="h-8 text-sm"/>
                              </div>))}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>)}
                </Tabs>
              </>)}
          </div>
        </div>
      </div>
    </main>);
}
//# sourceMappingURL=product-config.js.map