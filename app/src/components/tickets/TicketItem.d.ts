import type { Ticket } from '@/data/tickets/ticketData';
interface TicketItemProps {
    ticket: Ticket & {
        avatarImage?: string | null;
        assignedToImage?: string | null;
        assignedToName?: string;
    };
    isSelected: boolean;
    onSelect: () => void;
}
export declare function TicketItem({ ticket, isSelected, onSelect }: TicketItemProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=TicketItem.d.ts.map