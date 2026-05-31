import { createFileRoute } from '@tanstack/react-router';
import { useSuspenseQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getAllConfigurationOptions, createConfigurationOption, updateConfigurationOption, deleteConfigurationOption, createConfigurationValue, updateConfigurationValue, deleteConfigurationValue, } from '@/serverActions/configuration/configuration.api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Settings } from 'lucide-react';
import { MediaPicker } from '@/components/imagekit/MediaPicker';
import { toast } from 'sonner';
import { useState } from 'react';
export const Route = createFileRoute('/_protected/admin/configurations')({
    head: () => ({ meta: [{ title: 'Configuration Management | Admin' }] }),
    component: ConfigurationsPage,
});
function ConfigurationsPage() {
    const qc = useQueryClient();
    const { data: options = [] } = useSuspenseQuery({
        queryKey: ['admin-config-options'],
        queryFn: () => getAllConfigurationOptions(),
    });
    const [optionDialogOpen, setOptionDialogOpen] = useState(false);
    const [valueDialogOpen, setValueDialogOpen] = useState(false);
    const [editingOption, setEditingOption] = useState(null);
    const [editingValue, setEditingValue] = useState(null);
    const [selectedOptionForValue, setSelectedOptionForValue] = useState(null);
    const createOptionMutation = useMutation({
        mutationFn: createConfigurationOption,
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['admin-config-options'] });
            toast.success('Configuration option created');
            setOptionDialogOpen(false);
        },
        onError: () => toast.error('Failed to create option'),
    });
    const updateOptionMutation = useMutation({
        mutationFn: updateConfigurationOption,
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['admin-config-options'] });
            toast.success('Configuration option updated');
            setOptionDialogOpen(false);
            setEditingOption(null);
        },
        onError: () => toast.error('Failed to update option'),
    });
    const deleteOptionMutation = useMutation({
        mutationFn: deleteConfigurationOption,
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['admin-config-options'] });
            toast.success('Configuration option deleted');
        },
        onError: () => toast.error('Failed to delete option'),
    });
    const createValueMutation = useMutation({
        mutationFn: createConfigurationValue,
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['admin-config-options'] });
            toast.success('Configuration value created');
            setValueDialogOpen(false);
        },
        onError: () => toast.error('Failed to create value'),
    });
    const updateValueMutation = useMutation({
        mutationFn: updateConfigurationValue,
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['admin-config-options'] });
            toast.success('Configuration value updated');
            setValueDialogOpen(false);
            setEditingValue(null);
        },
        onError: () => toast.error('Failed to update value'),
    });
    const deleteValueMutation = useMutation({
        mutationFn: deleteConfigurationValue,
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['admin-config-options'] });
            toast.success('Configuration value deleted');
        },
        onError: () => toast.error('Failed to delete value'),
    });
    const groupedOptions = options.reduce((acc, option) => {
        if (!acc[option.category]) {
            acc[option.category] = [];
        }
        acc[option.category].push(option);
        return acc;
    }, {});
    return (<main className="flex-1 overflow-y-auto">
      <div className="px-5 py-6 max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Configuration Management</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Manage product configuration options for different categories
            </p>
          </div>
          <Dialog open={optionDialogOpen} onOpenChange={setOptionDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => setEditingOption(null)}>
                <Plus className="w-4 h-4 mr-2"/>
                Add Option
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{editingOption ? 'Edit' : 'Create'} Configuration Option</DialogTitle>
              </DialogHeader>
              <OptionForm option={editingOption} onSubmit={(data) => {
            if (editingOption) {
                updateOptionMutation.mutate({ data: { ...data, id: editingOption.id } });
            }
            else {
                createOptionMutation.mutate({ data });
            }
        }} isPending={createOptionMutation.isPending || updateOptionMutation.isPending}/>
            </DialogContent>
          </Dialog>
        </div>

        <div className="space-y-6">
          {Object.entries(groupedOptions).map(([category, categoryOptions]) => (<Card key={category}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5"/>
                  {category}
                  <Badge variant="secondary">{categoryOptions.length} options</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {categoryOptions.map((option) => (<div key={option.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{option.label}</h3>
                          <Badge variant="outline">{option.type}</Badge>
                          {option.required && <Badge variant="destructive">Required</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground">Name: {option.name}</p>
                        {option.description && (<p className="text-sm text-muted-foreground mt-1">{option.description}</p>)}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" onClick={() => {
                    setEditingOption(option);
                    setOptionDialogOpen(true);
                }}>
                          <Edit className="w-4 h-4"/>
                        </Button>
                        <Button size="sm" variant="ghost" onClick={() => {
                    if (confirm('Delete this option and all its values?')) {
                        deleteOptionMutation.mutate({ data: { id: option.id } });
                    }
                }}>
                          <Trash2 className="w-4 h-4 text-destructive"/>
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm font-medium">Values ({option.values.length})</Label>
                        <Button size="sm" variant="outline" onClick={() => {
                    setSelectedOptionForValue(option.id);
                    setEditingValue(null);
                    setValueDialogOpen(true);
                }}>
                          <Plus className="w-3 h-3 mr-1"/>
                          Add Value
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {option.values.map((value) => (<div key={value.id} className="flex items-center justify-between p-2 border rounded bg-muted/30">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">{value.label}</p>
                              <p className="text-xs text-muted-foreground">
                                Value: {value.value}
                                {value.priceModifier !== 0 && (<span className="ml-2">
                                    ({value.priceModifier > 0 ? '+' : ''}₹{value.priceModifier})
                                  </span>)}
                              </p>
                            </div>
                            <div className="flex gap-1">
                              <Button size="sm" variant="ghost" className="h-7 w-7 p-0" onClick={() => {
                        setSelectedOptionForValue(option.id);
                        setEditingValue(value);
                        setValueDialogOpen(true);
                    }}>
                                <Edit className="w-3 h-3"/>
                              </Button>
                              <Button size="sm" variant="ghost" className="h-7 w-7 p-0" onClick={() => {
                        if (confirm('Delete this value?')) {
                            deleteValueMutation.mutate({ data: { id: value.id } });
                        }
                    }}>
                                <Trash2 className="w-3 h-3 text-destructive"/>
                              </Button>
                            </div>
                          </div>))}
                      </div>
                    </div>
                  </div>))}
              </CardContent>
            </Card>))}
        </div>

        <Dialog open={valueDialogOpen} onOpenChange={setValueDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingValue ? 'Edit' : 'Create'} Configuration Value</DialogTitle>
            </DialogHeader>
            <ValueForm value={editingValue} optionId={selectedOptionForValue || ''} onSubmit={(data) => {
            if (editingValue) {
                updateValueMutation.mutate({ data: { ...data, id: editingValue.id } });
            }
            else {
                createValueMutation.mutate({ data });
            }
        }} isPending={createValueMutation.isPending || updateValueMutation.isPending}/>
          </DialogContent>
        </Dialog>
      </div>
    </main>);
}
function OptionForm({ option, onSubmit, isPending, }) {
    const [formData, setFormData] = useState({
        name: option?.name || '',
        label: option?.label || '',
        description: option?.description || '',
        type: option?.type || 'SELECT',
        required: option?.required ?? true,
        category: option?.category || 'MINECRAFT',
        sortOrder: option?.sortOrder || 0,
    });
    return (<form onSubmit={(e) => {
            e.preventDefault();
            onSubmit(formData);
        }} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Name (internal)</Label>
          <Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="e.g., server_type" required/>
        </div>
        <div className="space-y-2">
          <Label>Label (display)</Label>
          <Input value={formData.label} onChange={(e) => setFormData({ ...formData, label: e.target.value })} placeholder="e.g., Server Type" required/>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Description</Label>
        <Textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} placeholder="Optional description"/>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label>Type</Label>
          <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="SELECT">Select Dropdown</SelectItem>
              <SelectItem value="RADIO">Radio Buttons</SelectItem>
              <SelectItem value="TEXT">Text Input</SelectItem>
              <SelectItem value="NUMBER">Number Input</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Category</Label>
          <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="MINECRAFT">Minecraft</SelectItem>
              <SelectItem value="VPS">VPS</SelectItem>
              <SelectItem value="VDS">VDS</SelectItem>
              <SelectItem value="WEBHOST">Web Hosting</SelectItem>
              <SelectItem value="DISCORD">Discord Bot</SelectItem>
              <SelectItem value="DDOS_PROT">DDoS Protection</SelectItem>
              <SelectItem value="DEDICATED">Dedicated Server</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Sort Order</Label>
          <Input type="number" value={formData.sortOrder} onChange={(e) => setFormData({ ...formData, sortOrder: parseInt(e.target.value) || 0 })}/>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" id="required" checked={formData.required} onChange={(e) => setFormData({ ...formData, required: e.target.checked })} className="rounded"/>
        <Label htmlFor="required" className="cursor-pointer">
          Required field
        </Label>
      </div>

      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? 'Saving...' : option ? 'Update Option' : 'Create Option'}
      </Button>
    </form>);
}
function ValueForm({ value, optionId, onSubmit, isPending, }) {
    const meta = value?.metadata;
    const [formData, setFormData] = useState({
        optionId: value?.optionId || optionId,
        label: value?.label || '',
        value: value?.value || '',
        description: value?.description || '',
        priceModifier: value?.priceModifier || 0,
        sortOrder: value?.sortOrder || 0,
        icon: meta?.icon || '',
        eggId: meta?.eggId ? String(meta.eggId) : '',
        nestId: meta?.nestId ? String(meta.nestId) : '',
        envVars: meta?.envVars ? JSON.stringify(meta.envVars, null, 2) : '',
    });
    return (<form onSubmit={(e) => {
            e.preventDefault();
            let envVarsParsed;
            if (formData.envVars.trim()) {
                try {
                    envVarsParsed = JSON.parse(formData.envVars);
                }
                catch {
                    envVarsParsed = undefined;
                }
            }
            const metadata = {};
            if (formData.icon)
                metadata.icon = formData.icon;
            if (formData.eggId)
                metadata.eggId = Number(formData.eggId);
            if (formData.nestId)
                metadata.nestId = Number(formData.nestId);
            if (envVarsParsed)
                metadata.envVars = envVarsParsed;
            onSubmit({ ...formData, metadata: Object.keys(metadata).length ? metadata : undefined });
        }} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Label (display)</Label>
          <Input value={formData.label} onChange={(e) => setFormData({ ...formData, label: e.target.value })} placeholder="e.g., Vanilla" required/>
        </div>
        <div className="space-y-2">
          <Label>Value (internal)</Label>
          <Input value={formData.value} onChange={(e) => setFormData({ ...formData, value: e.target.value })} placeholder="e.g., vanilla" required/>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Description</Label>
        <Textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} placeholder="Optional description"/>
      </div>

      <div className="space-y-2">
        <Label>Icon URL <span className="text-xs text-muted-foreground">(optional — shows card-grid UI for RADIO type)</span></Label>
        <div className="flex items-center gap-2">
          <Input value={formData.icon} onChange={(e) => setFormData({ ...formData, icon: e.target.value })} placeholder="https://example.com/icon.png"/>
          <MediaPicker value={formData.icon} onChange={(url) => setFormData({ ...formData, icon: url })}/>
          {formData.icon && (<img src={formData.icon} alt="" className="w-8 h-8 object-contain shrink-0 rounded border border-border" onError={(e) => { e.target.style.display = 'none'; }}/>)}
        </div>
      </div>

      <div className="rounded-lg border border-border p-3 space-y-3">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Pterodactyl Deploy Config</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <Label className="text-xs">Nest ID</Label>
            <Input type="number" value={formData.nestId} onChange={(e) => setFormData({ ...formData, nestId: e.target.value })} placeholder="e.g., 1"/>
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Egg ID</Label>
            <Input type="number" value={formData.eggId} onChange={(e) => setFormData({ ...formData, eggId: e.target.value })} placeholder="e.g., 3"/>
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">Environment Variables <span className="text-muted-foreground">(JSON)</span></Label>
          <Textarea value={formData.envVars} onChange={(e) => setFormData({ ...formData, envVars: e.target.value })} placeholder={'{\n  "SERVER_JARFILE": "server.jar",\n  "MC_VERSION": "latest"\n}'} className="font-mono text-xs" rows={4}/>
          <p className="text-xs text-muted-foreground">Overrides egg defaults. Leave empty to use egg defaults.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Price Modifier (₹)</Label>
          <Input type="number" value={formData.priceModifier} onChange={(e) => setFormData({ ...formData, priceModifier: parseInt(e.target.value) || 0 })} placeholder="0"/>
          <p className="text-xs text-muted-foreground">Positive adds to price, negative subtracts</p>
        </div>

        <div className="space-y-2">
          <Label>Sort Order</Label>
          <Input type="number" value={formData.sortOrder} onChange={(e) => setFormData({ ...formData, sortOrder: parseInt(e.target.value) || 0 })}/>
        </div>
      </div>

      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? 'Saving...' : value ? 'Update Value' : 'Create Value'}
      </Button>
    </form>);
}
//# sourceMappingURL=configurations.js.map