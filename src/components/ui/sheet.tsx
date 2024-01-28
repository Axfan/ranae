import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "rn-fixed rn-inset-0 rn-z-50 rn-bg-black/80 rn- data-[state=open]:rn-animate-in data-[state=closed]:rn-animate-out data-[state=closed]:rn-fade-out-0 data-[state=open]:rn-fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "rn-fixed rn-z-50 rn-gap-4 rn-bg-background rn-p-6 rn-shadow-lg rn-transition rn-ease-in-out data-[state=open]:rn-animate-in data-[state=closed]:rn-animate-out data-[state=closed]:rn-duration-300 data-[state=open]:rn-duration-500",
  {
    variants: {
      side: {
        top: "rn-inset-x-0 rn-top-0 rn-border-b data-[state=closed]:rn-slide-out-to-top data-[state=open]:rn-slide-in-from-top",
        bottom:
          "rn-inset-x-0 rn-bottom-0 rn-border-t data-[state=closed]:rn-slide-out-to-bottom data-[state=open]:rn-slide-in-from-bottom",
        left: "rn-inset-y-0 rn-left-0 rn-h-full rn-w-3/4 rn-border-r data-[state=closed]:rn-slide-out-to-left data-[state=open]:rn-slide-in-from-left sm:rn-max-w-sm",
        right:
          "rn-inset-y-0 rn-right-0 rn-h-full rn-w-3/4 rn- rn-border-l data-[state=closed]:rn-slide-out-to-right data-[state=open]:rn-slide-in-from-right sm:rn-max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="rn-absolute rn-right-4 rn-top-4 rn-rounded-sm rn-opacity-70 rn-ring-offset-background rn-transition-opacity hover:rn-opacity-100 focus:rn-outline-none focus:rn-ring-2 focus:rn-ring-ring focus:rn-ring-offset-2 disabled:rn-pointer-events-none data-[state=open]:rn-bg-secondary">
        <X className="rn-h-4 rn-w-4" />
        <span className="rn-sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "rn-flex rn-flex-col rn-space-y-2 rn-text-center sm:rn-text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
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
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("rn-text-lg rn-font-semibold rn-text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("rn-text-sm rn-text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
