import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "rn-inline-flex rn-items-center rn-justify-center rn-whitespace-nowrap rn-rounded-md rn-text-sm rn-font-medium rn-ring-offset-background rn-transition-colors focus-visible:rn-outline-none focus-visible:rn-ring-2 focus-visible:rn-ring-ring focus-visible:rn-ring-offset-2 disabled:rn-pointer-events-none disabled:rn-opacity-50",
  {
    variants: {
      variant: {
        default: "rn-bg-primary rn-text-primary-foreground hover:rn-bg-primary/90",
        destructive:
          "rn-bg-destructive rn-text-destructive-foreground hover:rn-bg-destructive/90",
        outline:
          "rn-border rn-border-input rn-bg-background hover:rn-bg-accent hover:rn-text-accent-foreground",
        secondary:
          "rn-bg-secondary rn-text-secondary-foreground hover:rn-bg-secondary/80",
        ghost: "hover:rn-bg-accent hover:rn-text-accent-foreground",
        link: "rn-text-primary rn-underline-offset-4 hover:rn-underline",
      },
      size: {
        default: "rn-h-10 rn-px-4 rn-py-2",
        sm: "rn-h-9 rn-rounded-md rn-px-3",
        lg: "rn-h-11 rn-rounded-md rn-px-8",
        icon: "rn-h-10 rn-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
