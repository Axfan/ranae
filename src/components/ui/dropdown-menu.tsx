import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "rn-flex rn-cursor-default rn-select-none rn-items-center rn-rounded-sm rn-px-2 rn-py-1.5 rn-text-sm rn-outline-none focus:rn-bg-accent data-[state=open]:rn-bg-accent",
      inset && "rn-pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="rn-ml-auto rn-h-4 rn-w-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "rn-z-50 rn-min-w-[8rem] rn-overflow-hidden rn-rounded-md rn-border rn-bg-popover rn-p-1 rn-text-popover-foreground rn-shadow-lg data-[state=open]:rn-animate-in data-[state=closed]:rn-animate-out data-[state=closed]:rn-fade-out-0 data-[state=open]:rn-fade-in-0 data-[state=closed]:rn-zoom-out-95 data-[state=open]:rn-zoom-in-95 data-[side=bottom]:rn-slide-in-from-top-2 data-[side=left]:rn-slide-in-from-right-2 data-[side=right]:rn-slide-in-from-left-2 data-[side=top]:rn-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "rn-z-50 rn-min-w-[8rem] rn-overflow-hidden rn-rounded-md rn-border rn-bg-popover rn-p-1 rn-text-popover-foreground rn-shadow-md data-[state=open]:rn-animate-in data-[state=closed]:rn-animate-out data-[state=closed]:rn-fade-out-0 data-[state=open]:rn-fade-in-0 data-[state=closed]:rn-zoom-out-95 data-[state=open]:rn-zoom-in-95 data-[side=bottom]:rn-slide-in-from-top-2 data-[side=left]:rn-slide-in-from-right-2 data-[side=right]:rn-slide-in-from-left-2 data-[side=top]:rn-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "rn-relative rn-flex rn-cursor-default rn-select-none rn-items-center rn-rounded-sm rn-px-2 rn-py-1.5 rn-text-sm rn-outline-none rn-transition-colors focus:rn-bg-accent focus:rn-text-accent-foreground data-[disabled]:rn-pointer-events-none data-[disabled]:rn-opacity-50",
      inset && "rn-pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "rn-relative rn-flex rn-cursor-default rn-select-none rn-items-center rn-rounded-sm rn-py-1.5 rn-pl-8 rn-pr-2 rn-text-sm rn-outline-none rn-transition-colors focus:rn-bg-accent focus:rn-text-accent-foreground data-[disabled]:rn-pointer-events-none data-[disabled]:rn-opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="rn-absolute rn-left-2 rn-flex rn-h-3.5 rn-w-3.5 rn-items-center rn-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="rn-h-4 rn-w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "rn-relative rn-flex rn-cursor-default rn-select-none rn-items-center rn-rounded-sm rn-py-1.5 rn-pl-8 rn-pr-2 rn-text-sm rn-outline-none rn-transition-colors focus:rn-bg-accent focus:rn-text-accent-foreground data-[disabled]:rn-pointer-events-none data-[disabled]:rn-opacity-50",
      className
    )}
    {...props}
  >
    <span className="rn-absolute rn-left-2 rn-flex rn-h-3.5 rn-w-3.5 rn-items-center rn-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="rn-h-2 rn-w-2 rn-fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "rn-px-2 rn-py-1.5 rn-text-sm rn-font-semibold",
      inset && "rn-pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("rn--mx-1 rn-my-1 rn-h-px rn-bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("rn-ml-auto rn-text-xs rn-tracking-widest rn-opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
