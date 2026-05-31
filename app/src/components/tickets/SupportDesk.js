import { StaffSupportDesk } from './supportDesk/StaffSupportDesk';
import { UserSupportDesk } from './supportDesk/UserSupportDesk';
export function SupportDesk({ mode }) {
    if (mode === 'staff')
        return <StaffSupportDesk />;
    return <UserSupportDesk />;
}
//# sourceMappingURL=SupportDesk.js.map