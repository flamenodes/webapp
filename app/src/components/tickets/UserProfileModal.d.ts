interface UserProfileModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    user?: {
        id: string;
        name: string;
        email: string;
        image?: string | null;
        username: string;
        firstname: string;
        lastname: string;
        role?: string | null;
        banned?: boolean | null;
        banReason?: string | null;
        banExpires?: Date | null;
        createdAt: Date;
        updatedAt: Date;
    };
}
export declare function UserProfileModal({ open, onOpenChange, user }: UserProfileModalProps): import("react").JSX.Element | null;
export {};
//# sourceMappingURL=UserProfileModal.d.ts.map