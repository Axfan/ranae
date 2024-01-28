import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "rn-flex rn-h-10 rn-w-full rn-rounded-md rn-border rn-border-input rn-bg-background rn-px-3 rn-py-2 rn-text-sm rn-ring-offset-background file:rn-border-0 file:rn-bg-transparent file:rn-text-sm file:rn-font-medium placeholder:rn-text-muted-foreground focus-visible:rn-outline-none focus-visible:rn-ring-2 focus-visible:rn-ring-ring focus-visible:rn-ring-offset-2 disabled:rn-cursor-not-allowed disabled:rn-opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
