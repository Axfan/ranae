import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "rn-inline-flex rn-items-center rn-rounded-full rn-border rn-px-3 rn-py-1 rn-text-xs rn-font-semibold rn-transition-colors focus:rn-outline-none focus:rn-ring-2 focus:rn-ring-ring focus:rn-ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "rn-border-transparent rn-bg-primary rn-text-primary-foreground hover:rn-bg-primary/80",
        secondary:
          "rn-border-transparent rn-bg-secondary rn-text-secondary-foreground hover:rn-bg-secondary/80",
        destructive:
          "rn-border-transparent rn-bg-destructive rn-text-destructive-foreground hover:rn-bg-destructive/80",
        outline: "rn-text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
