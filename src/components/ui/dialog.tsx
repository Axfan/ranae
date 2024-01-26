import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "rn-fixed rn-inset-0 rn-z-50 rn-bg-black/80 rn- data-[state=open]:rn-animate-in data-[state=closed]:rn-animate-out data-[state=closed]:rn-fade-out-0 data-[state=open]:rn-fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "rn-fixed rn-left-[50%] rn-top-[50%] rn-z-50 rn-grid rn-w-full rn-max-w-lg rn-translate-x-[-50%] rn-translate-y-[-50%] rn-gap-4 rn-border rn-bg-background rn-p-6 rn-shadow-lg rn-duration-200 data-[state=open]:rn-animate-in data-[state=closed]:rn-animate-out data-[state=closed]:rn-fade-out-0 data-[state=open]:rn-fade-in-0 data-[state=closed]:rn-zoom-out-95 data-[state=open]:rn-zoom-in-95 data-[state=closed]:rn-slide-out-to-left-1/2 data-[state=closed]:rn-slide-out-to-top-[48%] data-[state=open]:rn-slide-in-from-left-1/2 data-[state=open]:rn-slide-in-from-top-[48%] sm:rn-rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="rn-absolute rn-right-4 rn-top-4 rn-rounded-sm rn-opacity-70 rn-ring-offset-background rn-transition-opacity hover:rn-opacity-100 focus:rn-outline-none focus:rn-ring-2 focus:rn-ring-ring focus:rn-ring-offset-2 disabled:rn-pointer-events-none data-[state=open]:rn-bg-accent data-[state=open]:rn-text-muted-foreground">
        <X className="rn-h-4 rn-w-4" />
        <span className="rn-sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "rn-flex rn-flex-col rn-space-y-1.5 rn-text-center sm:rn-text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "rn-flex rn-flex-col-reverse sm:rn-flex-row sm:rn-justify-end sm:rn-space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "rn-text-lg rn-font-semibold rn-leading-none rn-tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("rn-text-sm rn-text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
