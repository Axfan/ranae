import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("rn-grid rn-gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "rn-aspect-square rn-h-4 rn-w-4 rn-rounded-full rn-border rn-border-primary rn-text-primary rn-ring-offset-background focus:rn-outline-none focus-visible:rn-ring-2 focus-visible:rn-ring-ring focus-visible:rn-ring-offset-2 disabled:rn-cursor-not-allowed disabled:rn-opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="rn-flex rn-items-center rn-justify-center">
        <Circle className="rn-h-2.5 rn-w-2.5 rn-fill-current rn-text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
