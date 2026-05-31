interface ChatTopBarProps {
    ticketId: string;
    ticketTitle: string;
    userName: string;
    userAvatar: string;
    userImage?: string | null;
    assignedToAvatar?: string;
    assignedToImage?: string | null;
    status: 'open' | 'closed' | 'pending';
    isAssigned: boolean;
    onJoin?: () => void;
    onStatusChange?: (status: 'open' | 'closed' | 'pending') => void;
    onResolve?: () => void;
    onClose?: () => void;
    showResolveButton?: boolean;
    showJoinButton?: boolean;
    showCloseButton?: boolean;
}
export declare function ChatTopBar({ ticketId, ticketTitle, userName, userAvatar, userImage, assignedToAvatar, assignedToImage, status, isAssigned, onJoin, onResolve, onClose, showResolveButton, showJoinButton, showCloseButton, }: ChatTopBarProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=ChatTopBar.d.ts.map