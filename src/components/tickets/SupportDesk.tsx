import { StaffSupportDesk } from './supportDesk/StaffSupportDesk'
import { UserSupportDesk } from './supportDesk/UserSupportDesk'

type Mode = 'user' | 'staff'

export function SupportDesk({ mode }: { mode: Mode }) {
  if (mode === 'staff') return <StaffSupportDesk />
  return <UserSupportDesk />
}

