import * as React from "react"
import { cn } from "#/lib/utils.ts"

function Marker({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="marker"
      className={cn("flex items-center justify-center gap-2 py-1", className)}
      {...props}
    />
  )
}

function MarkerContent({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="marker-content"
      className={cn(
        "rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Marker, MarkerContent }
