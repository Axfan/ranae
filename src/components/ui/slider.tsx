import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "rn-relative rn-flex rn-w-full rn-touch-none rn-select-none rn-items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="rn-relative rn-h-2 rn-w-full rn-grow rn-overflow-hidden rn-rounded-full rn-bg-secondary">
      <SliderPrimitive.Range className="rn-absolute rn-h-full rn-bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="rn-block rn-h-5 rn-w-5 rn-rounded-full rn-border-2 rn-border-primary rn-bg-background rn-ring-offset-background rn-transition-colors focus-visible:rn-outline-none focus-visible:rn-ring-2 focus-visible:rn-ring-ring focus-visible:rn-ring-offset-2 disabled:rn-pointer-events-none disabled:rn-opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
