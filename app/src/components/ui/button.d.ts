import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';
declare const buttonVariants: (props?: ({
    variant?: "default" | "link" | "outline" | "ghost" | "secondary" | "destructive" | "great" | null | undefined;
    size?: "default" | "icon" | "icon-sm" | "sm" | "great" | "xs" | "lg" | "icon-xs" | "icon-lg" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare function Button({ className, variant, size, asChild, ...props }: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): React.JSX.Element;
export { Button, buttonVariants };
//# sourceMappingURL=button.d.ts.map