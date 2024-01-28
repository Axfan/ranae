import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "rn-fixed rn-top-0 rn-z-[100] rn-flex rn-max-h-screen rn-w-full rn-flex-col-reverse rn-p-4 sm:rn-bottom-0 sm:rn-right-0 sm:rn-top-auto sm:rn-flex-col md:rn-max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "rn-group rn-pointer-events-auto rn-relative rn-flex rn-w-full rn-items-center rn-justify-between rn-space-x-4 rn-overflow-hidden rn-rounded-md rn-border rn-p-6 rn-pr-8 rn-shadow-lg rn-transition-all data-[swipe=cancel]:rn-translate-x-0 data-[swipe=end]:rn-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:rn-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:rn-transition-none data-[state=open]:rn-animate-in data-[state=closed]:rn-animate-out data-[swipe=end]:rn-animate-out data-[state=closed]:rn-fade-out-80 data-[state=closed]:rn-slide-out-to-right-full data-[state=open]:rn-slide-in-from-top-full data-[state=open]:sm:rn-slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "rn-border rn-bg-background rn-text-foreground",
        destructive:
          "rn-destructive rn-group rn-border-destructive rn-bg-destructive rn-text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "rn-inline-flex rn-h-8 rn-shrink-0 rn-items-center rn-justify-center rn-rounded-md rn-border rn-bg-transparent rn-px-3 rn-text-sm rn-font-medium rn-ring-offset-background rn-transition-colors hover:rn-bg-secondary focus:rn-outline-none focus:rn-ring-2 focus:rn-ring-ring focus:rn-ring-offset-2 disabled:rn-pointer-events-none disabled:rn-opacity-50 group-[.destructive]:rn-border-muted/40 group-[.destructive]:hover:rn-border-destructive/30 group-[.destructive]:hover:rn-bg-destructive group-[.destructive]:hover:rn-text-destructive-foreground group-[.destructive]:focus:rn-ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "rn-absolute rn-right-2 rn-top-2 rn-rounded-md rn-p-1 rn-text-foreground/50 rn-opacity-0 rn-transition-opacity hover:rn-text-foreground focus:rn-opacity-100 focus:rn-outline-none focus:rn-ring-2 group-hover:rn-opacity-100 group-[.destructive]:rn-text-red-300 group-[.destructive]:hover:rn-text-red-50 group-[.destructive]:focus:rn-ring-red-400 group-[.destructive]:focus:rn-ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="rn-h-4 rn-w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("rn-text-sm rn-font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("rn-text-sm rn-opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
