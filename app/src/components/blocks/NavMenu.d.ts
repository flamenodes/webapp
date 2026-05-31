import * as React from "react";
export interface NavItemProps {
    title: string;
    href?: string;
    children?: NavItemProps[];
    description?: string;
    className?: string;
}
interface NavMenuProps {
    items: NavItemProps[];
}
export declare function NavMenu({ items }: NavMenuProps): React.JSX.Element;
export {};
//# sourceMappingURL=NavMenu.d.ts.map