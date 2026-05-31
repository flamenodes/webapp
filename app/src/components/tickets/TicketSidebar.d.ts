interface TicketSidebarProps {
    selectedTicketId?: string;
    onSelectTicket?: (ticketId: string) => void;
    onCreateTicket?: () => void;
    showCreateButton?: boolean;
}
export declare function TicketSidebar({ selectedTicketId, onSelectTicket, onCreateTicket, showCreateButton }: TicketSidebarProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=TicketSidebar.d.ts.map