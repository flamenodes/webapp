import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, } from '#/components/ui/dropdown-menu';
import { getSession } from '#/handlers/auth.handler';
import { authClient } from '#/lib/auth-client';
import { hasPermissionClient } from '#/lib/has-permission-client';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import { toast } from 'sonner';
const UserProfileDropdown = () => {
    const { data } = useSuspenseQuery({
        queryKey: ['session'],
        queryFn: async () => await getSession(),
    });
    const { data: isAdmin } = useSuspenseQuery({
        queryKey: ['is-admin'],
        queryFn: async () => await hasPermissionClient({ dashboard: ['admin'] }),
    });
    const navigate = useNavigate();
    const handleLogout = async () => {
        const res = await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    navigate({ to: '/login' });
                },
            },
        });
        res.data?.success
            ? toast.success('You successfully logout.')
            : toast.error(res.error?.message);
    };
    return (<DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative cursor-pointer group ml-1">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/30 border border-primary/40 flex items-center justify-center group-hover:border-primary/70 group-hover:shadow-[0_0_20px_var(--primary)/30] group-hover:scale-105 transition-all duration-300 ease-out">
            <img src={data?.user.image}/>
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-background shadow-sm animate-pulse"/>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 p-2" align="start">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-foreground/70 font-semibold px-2 py-1.5">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-accent/50 transition-colors cursor-pointer">
            <FiUser className="w-4 h-4 text-foreground/60"/>
            <span>Account</span>
          </DropdownMenuItem>
          {isAdmin ? (<DropdownMenuItem onClick={() => navigate({ to: '/admin/dashboard' })} className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-accent/50 transition-colors cursor-pointer">
              <FiSettings className="w-4 h-4 text-foreground/60"/>
              <span>Admin Panel</span>
            </DropdownMenuItem>) : (<></>)}

          <DropdownMenuItem onClick={handleLogout} className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-destructive/10 hover:text-destructive transition-colors cursor-pointer">
            <FiLogOut className="w-4 h-4"/>
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>);
};
export default UserProfileDropdown;
//# sourceMappingURL=UserProfileDropdown.js.map