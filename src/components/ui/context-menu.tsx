import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const ContextMenu = ContextMenuPrimitive.Root

const ContextMenuTrigger = ContextMenuPrimitive.Trigger

const ContextMenuGroup = ContextMenuPrimitive.Group

const ContextMenuPortal = ContextMenuPrimitive.Portal

const ContextMenuSub = ContextMenuPrimitive.Sub

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "rn-flex rn-cursor-default rn-select-none rn-items-center rn-rounded-sm rn-px-2 rn-py-1.5 rn-text-sm rn-outline-none focus:rn-bg-accent focus:rn-text-accent-foreground data-[state=open]:rn-bg-accent data-[state=open]:rn-text-accent-foreground",
      inset && "rn-pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="rn-ml-auto rn-h-4 rn-w-4" />
  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "rn-z-50 rn-min-w-[8rem] rn-overflow-hidden rn-rounded-md rn-border rn-bg-popover rn-p-1 rn-text-popover-foreground rn-shadow-md data-[state=open]:rn-animate-in data-[state=closed]:rn-animate-out data-[state=closed]:rn-fade-out-0 data-[state=open]:rn-fade-in-0 data-[state=closed]:rn-zoom-out-95 data-[state=open]:rn-zoom-in-95 data-[side=bottom]:rn-slide-in-from-top-2 data-[side=left]:rn-slide-in-from-right-2 data-[side=right]:rn-slide-in-from-left-2 data-[side=top]:rn-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "rn-z-50 rn-min-w-[8rem] rn-overflow-hidden rn-rounded-md rn-border rn-bg-popover rn-p-1 rn-text-popover-foreground rn-shadow-md rn-animate-in rn-fade-in-80 data-[state=open]:rn-animate-in data-[state=closed]:rn-animate-out data-[state=closed]:rn-fade-out-0 data-[state=open]:rn-fade-in-0 data-[state=closed]:rn-zoom-out-95 data-[state=open]:rn-zoom-in-95 data-[side=bottom]:rn-slide-in-from-top-2 data-[side=left]:rn-slide-in-from-right-2 data-[side=right]:rn-slide-in-from-left-2 data-[side=top]:rn-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
))
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "rn-relative rn-flex rn-cursor-default rn-select-none rn-items-center rn-rounded-sm rn-px-2 rn-py-1.5 rn-text-sm rn-outline-none focus:rn-bg-accent focus:rn-text-accent-foreground data-[disabled]:rn-pointer-events-none data-[disabled]:rn-opacity-50",
      inset && "rn-pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "rn-relative rn-flex rn-cursor-default rn-select-none rn-items-center rn-rounded-sm rn-py-1.5 rn-pl-8 rn-pr-2 rn-text-sm rn-outline-none focus:rn-bg-accent focus:rn-text-accent-foreground data-[disabled]:rn-pointer-events-none data-[disabled]:rn-opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="rn-absolute rn-left-2 rn-flex rn-h-3.5 rn-w-3.5 rn-items-center rn-justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="rn-h-4 rn-w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
))
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "rn-relative rn-flex rn-cursor-default rn-select-none rn-items-center rn-rounded-sm rn-py-1.5 rn-pl-8 rn-pr-2 rn-text-sm rn-outline-none focus:rn-bg-accent focus:rn-text-accent-foreground data-[disabled]:rn-pointer-events-none data-[disabled]:rn-opacity-50",
      className
    )}
    {...props}
  >
    <span className="rn-absolute rn-left-2 rn-flex rn-h-3.5 rn-w-3.5 rn-items-center rn-justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="rn-h-2 rn-w-2 rn-fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
))
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(
      "rn-px-2 rn-py-1.5 rn-text-sm rn-font-semibold rn-text-foreground",
      inset && "rn-pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("rn--mx-1 rn-my-1 rn-h-px rn-bg-border", className)}
    {...props}
  />
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "rn-ml-auto rn-text-xs rn-tracking-widest rn-text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
ContextMenuShortcut.displayName = "ContextMenuShortcut"

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
