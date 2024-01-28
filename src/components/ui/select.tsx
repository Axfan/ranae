import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "rn-flex rn-h-10 rn-w-full rn-items-center rn-justify-between rn-rounded-md rn-border rn-border-input rn-bg-background rn-px-3 rn-py-2 rn-text-sm rn-ring-offset-background placeholder:rn-text-muted-foreground focus:rn-outline-none focus:rn-ring-2 focus:rn-ring-ring focus:rn-ring-offset-2 disabled:rn-cursor-not-allowed disabled:rn-opacity-50 [&>span]:rn-line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="rn-h-4 rn-w-4 rn-opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "rn-flex rn-cursor-default rn-items-center rn-justify-center rn-py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="rn-h-4 rn-w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "rn-flex rn-cursor-default rn-items-center rn-justify-center rn-py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="rn-h-4 rn-w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "rn-relative rn-z-50 rn-max-h-96 rn-min-w-[8rem] rn-overflow-hidden rn-rounded-md rn-border rn-bg-popover rn-text-popover-foreground rn-shadow-md data-[state=open]:rn-animate-in data-[state=closed]:rn-animate-out data-[state=closed]:rn-fade-out-0 data-[state=open]:rn-fade-in-0 data-[state=closed]:rn-zoom-out-95 data-[state=open]:rn-zoom-in-95 data-[side=bottom]:rn-slide-in-from-top-2 data-[side=left]:rn-slide-in-from-right-2 data-[side=right]:rn-slide-in-from-left-2 data-[side=top]:rn-slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:rn-translate-y-1 data-[side=left]:rn--translate-x-1 data-[side=right]:rn-translate-x-1 data-[side=top]:rn--translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "rn-p-1",
          position === "popper" &&
            "rn-h-[var(--radix-select-trigger-height)] rn-w-full rn-min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("rn-py-1.5 rn-pl-8 rn-pr-2 rn-text-sm rn-font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "rn-relative rn-flex rn-w-full rn-cursor-default rn-select-none rn-items-center rn-rounded-sm rn-py-1.5 rn-pl-8 rn-pr-2 rn-text-sm rn-outline-none focus:rn-bg-accent focus:rn-text-accent-foreground data-[disabled]:rn-pointer-events-none data-[disabled]:rn-opacity-50",
      className
    )}
    {...props}
  >
    <span className="rn-absolute rn-left-2 rn-flex rn-h-3.5 rn-w-3.5 rn-items-center rn-justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="rn-h-4 rn-w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("rn--mx-1 rn-my-1 rn-h-px rn-bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
