interface TicketSidebarHeaderProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
    counts: {
        all: number;
        open: number;
        pending: number;
        closed: number;
    };
    onCreateTicket?: () => void;
    showCreateButton?: boolean;
}
export declare function TicketSidebarHeader({ activeTab, onTabChange, counts, onCreateTicket, showCreateButton }: TicketSidebarHeaderProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=TicketSidebarHeader.d.ts.map