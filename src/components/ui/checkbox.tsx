import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "rn-peer rn-h-4 rn-w-4 rn-shrink-0 rn-rounded-sm rn-border rn-border-primary rn-ring-offset-background focus-visible:rn-outline-none focus-visible:rn-ring-2 focus-visible:rn-ring-ring focus-visible:rn-ring-offset-2 disabled:rn-cursor-not-allowed disabled:rn-opacity-50 data-[state=checked]:rn-bg-primary data-[state=checked]:rn-text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("rn-flex rn-items-center rn-justify-center rn-text-current")}
    >
      <Check className="rn-h-4 rn-w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
