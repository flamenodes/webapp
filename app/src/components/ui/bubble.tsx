import * as React from "react"
import { cn } from "#/lib/utils.ts"

function BubbleGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="bubble-group"
      className={cn("flex flex-col gap-1", className)}
      {...props}
    />
  )
}

function Bubble({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & { variant?: "default" | "muted" }) {
  return (
    <div
      data-slot="bubble"
      data-variant={variant}
      className={cn(
        "group/bubble relative w-fit max-w-full rounded-2xl",
        variant === "default" && "bg-primary text-primary-foreground",
        variant === "muted" && "bg-muted text-foreground",
        className
      )}
      {...props}
    />
  )
}

function BubbleContent({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="bubble-content"
      className={cn("px-4 py-3 text-sm leading-relaxed break-words", className)}
      {...props}
    />
  )
}

function BubbleReactions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="bubble-reactions"
      className={cn(
        "flex items-center gap-1 px-3 pb-2 text-sm",
        className
      )}
      {...props}
    />
  )
}

export { BubbleGroup, Bubble, BubbleContent, BubbleReactions }
