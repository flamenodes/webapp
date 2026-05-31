import { Button } from '#/components/ui/button';
import { Field } from '#/components/ui/field';
import { Input } from '#/components/ui/input';
import { Label } from '#/components/ui/label';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, } from '#/components/ui/sheet';
import { Checkbox } from '#/components/ui/checkbox';
import { createCustomer, updateCustomer, generatePassword, } from '#/serverActions/customers/customers.api';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';
import { RefreshCw, Eye, EyeOff } from 'lucide-react';
const CreateCustomerModal = ({ children, customer, }) => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [image, setImage] = useState('');
    const [displayUsername, setDisplayUsername] = useState('');
    const [banned, setBanned] = useState(false);
    const [banReason, setBanReason] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const queryClient = useQueryClient();
    const mode = useMemo(() => (customer ? 'edit' : 'create'), [customer]);
    function resetForm() {
        setName('');
        setEmail('');
        setUsername('');
        setFirstname('');
        setLastname('');
        setPassword('');
        setShowPassword(false);
        setImage('');
        setDisplayUsername('');
        setBanned(false);
        setBanReason('');
    }
    useEffect(() => {
        if (!open)
            return;
        if (!customer) {
            resetForm();
            return;
        }
        setName(customer.name);
        setEmail(customer.email);
        setUsername(customer.username);
        setFirstname(customer.firstname);
        setLastname(customer.lastname);
        setImage(customer.image ?? '');
        setDisplayUsername(customer.displayUsername ?? '');
        setBanned(Boolean(customer.banned));
        setBanReason(customer.banReason ?? '');
    }, [open, customer?.id]);
    const handleGeneratePassword = async () => {
        try {
            const result = await generatePassword();
            if (result.password) {
                setPassword(result.password);
                setShowPassword(true);
                toast.success('Password generated');
            }
        }
        catch (err) {
            toast.error('Failed to generate password');
        }
    };
    const handleCreate = async () => {
        if (isSubmitting)
            return;
        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        const trimmedUsername = username.trim();
        const trimmedFirstname = firstname.trim();
        const trimmedLastname = lastname.trim();
        if (!trimmedName || !trimmedEmail || !trimmedUsername || !trimmedFirstname || !trimmedLastname) {
            toast.error('All fields are required.');
            return;
        }
        if (mode === 'create' && !password.trim()) {
            toast.error('Password is required.');
            return;
        }
        setIsSubmitting(true);
        try {
            const data = {
                name: trimmedName,
                email: trimmedEmail,
                username: trimmedUsername,
                firstname: trimmedFirstname,
                lastname: trimmedLastname,
                image: image.trim() || null,
                displayUsername: displayUsername.trim() || null,
                ...(mode === 'create' ? { password: password.trim() } : {}),
                ...(mode === 'edit' ? { banned, banReason: banReason.trim() || null } : {}),
            };
            if (mode === 'edit' && customer) {
                const res = await updateCustomer({
                    data: {
                        id: customer.id,
                        ...data,
                    },
                });
                toast.success(`Updated ${res.customer.name || 'customer'}`);
            }
            else {
                const res = await createCustomer({ data });
                toast.success(`Created ${res.customer.name || 'customer'}`);
            }
            await queryClient.invalidateQueries({
                queryKey: ['customers'],
            });
            await queryClient.refetchQueries({
                queryKey: ['customers'],
            });
            setOpen(false);
            resetForm();
        }
        catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to save customer.';
            toast.error(message);
        }
        finally {
            setIsSubmitting(false);
        }
    };
    return (<Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>
            {mode === 'edit' ? 'Edit Customer' : 'Create Customer'}
          </SheetTitle>

          <SheetDescription>
            {mode === 'edit' ? 'Update customer information.' : 'Add a new customer to the system.'}
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-6 px-4 py-6">
          <Field>
            <Label>Full Name</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe"/>
          </Field>

          <Field>
            <Label>Email</Label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" disabled={mode === 'edit'}/>
          </Field>

          <Field>
            <Label>Username</Label>
            <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="johndoe" disabled={mode === 'edit'}/>
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field>
              <Label>First Name</Label>
              <Input value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="John"/>
            </Field>

            <Field>
              <Label>Last Name</Label>
              <Input value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Doe"/>
            </Field>
          </div>

          {mode === 'create' && (<Field>
              <Label>Password</Label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" className="pr-10"/>
                  <Button type="button" variant="ghost" size="icon-sm" className="absolute right-2 top-1/2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff className="h-4 w-4"/> : <Eye className="h-4 w-4"/>}
                  </Button>
                </div>
                <Button type="button" variant="outline" onClick={handleGeneratePassword}>
                  <RefreshCw className="h-4 w-4"/>
                </Button>
              </div>
            </Field>)}

          <Field>
            <Label>Display Username (optional)</Label>
            <Input value={displayUsername} onChange={(e) => setDisplayUsername(e.target.value)} placeholder="JohnD"/>
          </Field>

          <Field>
            <Label>Profile Image URL (optional)</Label>
            <Input value={image} onChange={(e) => setImage(e.target.value)} placeholder="https://example.com/avatar.jpg"/>
          </Field>

          {mode === 'edit' && (<>
              <Field>
                <div className="flex items-center gap-2">
                  <Checkbox checked={banned} onCheckedChange={(checked) => setBanned(checked === true)}/>
                  <Label>Banned</Label>
                </div>
              </Field>

              {banned && (<Field>
                  <Label>Ban Reason</Label>
                  <Input value={banReason} onChange={(e) => setBanReason(e.target.value)} placeholder="Reason for ban"/>
                </Field>)}
            </>)}

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => {
            setOpen(false);
            resetForm();
        }} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="button" onClick={handleCreate} disabled={isSubmitting}>
              {mode === 'edit' ? 'Save Changes' : 'Create Customer'}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>);
};
export default CreateCustomerModal;
//# sourceMappingURL=CreateCustomerModal.js.map