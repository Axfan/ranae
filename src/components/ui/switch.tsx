import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "rn-peer rn-inline-flex rn-h-6 rn-w-11 rn-shrink-0 rn-cursor-pointer rn-items-center rn-rounded-full rn-border-2 rn-border-transparent rn-transition-colors focus-visible:rn-outline-none focus-visible:rn-ring-2 focus-visible:rn-ring-ring focus-visible:rn-ring-offset-2 focus-visible:rn-ring-offset-background disabled:rn-cursor-not-allowed disabled:rn-opacity-50 data-[state=checked]:rn-bg-primary data-[state=unchecked]:rn-bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "rn-pointer-events-none rn-block rn-h-5 rn-w-5 rn-rounded-full rn-bg-background rn-shadow-lg rn-ring-0 rn-transition-transform data-[state=checked]:rn-translate-x-5 data-[state=unchecked]:rn-translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
