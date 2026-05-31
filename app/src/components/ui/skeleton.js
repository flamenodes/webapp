import { cn } from "#/lib/utils.ts";
function Skeleton({ className, ...props }) {
    return (<div data-slot="skeleton" className={cn("animate-pulse rounded-md bg-accent", className)} {...props}/>);
}
export { Skeleton };
//# sourceMappingURL=skeleton.js.map