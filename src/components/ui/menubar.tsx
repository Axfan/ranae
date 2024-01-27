import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const MenubarMenu = MenubarPrimitive.Menu

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "rn-flex rn-h-10 rn-items-center rn-space-x-1 rn-rounded-md rn-border rn-bg-background rn-p-1",
      className
    )}
    {...props}
  />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "rn-flex rn-cursor-default rn-select-none rn-items-center rn-rounded-sm rn-px-3 rn-py-1.5 rn-text-sm rn-font-medium rn-outline-none focus:rn-bg-accent focus:rn-text-accent-foreground data-[state=open]:rn-bg-accent data-[state=open]:rn-text-accent-foreground",
      className
    )}
    {...props}
  />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
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
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "rn-z-50 rn-min-w-[8rem] rn-overflow-hidden rn-rounded-md rn-border rn-bg-popover rn-p-1 rn-text-popover-foreground data-[state=open]:rn-animate-in data-[state=closed]:rn-animate-out data-[state=closed]:rn-fade-out-0 data-[state=open]:rn-fade-in-0 data-[state=closed]:rn-zoom-out-95 data-[state=open]:rn-zoom-in-95 data-[side=bottom]:rn-slide-in-from-top-2 data-[side=left]:rn-slide-in-from-right-2 data-[side=right]:rn-slide-in-from-left-2 data-[side=top]:rn-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "rn-z-50 rn-min-w-[12rem] rn-overflow-hidden rn-rounded-md rn-border rn-bg-popover rn-p-1 rn-text-popover-foreground rn-shadow-md data-[state=open]:rn-animate-in data-[state=closed]:rn-fade-out-0 data-[state=open]:rn-fade-in-0 data-[state=closed]:rn-zoom-out-95 data-[state=open]:rn-zoom-in-95 data-[side=bottom]:rn-slide-in-from-top-2 data-[side=left]:rn-slide-in-from-right-2 data-[side=right]:rn-slide-in-from-left-2 data-[side=top]:rn-slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "rn-relative rn-flex rn-cursor-default rn-select-none rn-items-center rn-rounded-sm rn-px-2 rn-py-1.5 rn-text-sm rn-outline-none focus:rn-bg-accent focus:rn-text-accent-foreground data-[disabled]:rn-pointer-events-none data-[disabled]:rn-opacity-50",
      inset && "rn-pl-8",
      className
    )}
    {...props}
  />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "rn-relative rn-flex rn-cursor-default rn-select-none rn-items-center rn-rounded-sm rn-py-1.5 rn-pl-8 rn-pr-2 rn-text-sm rn-outline-none focus:rn-bg-accent focus:rn-text-accent-foreground data-[disabled]:rn-pointer-events-none data-[disabled]:rn-opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="rn-absolute rn-left-2 rn-flex rn-h-3.5 rn-w-3.5 rn-items-center rn-justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="rn-h-4 rn-w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "rn-relative rn-flex rn-cursor-default rn-select-none rn-items-center rn-rounded-sm rn-py-1.5 rn-pl-8 rn-pr-2 rn-text-sm rn-outline-none focus:rn-bg-accent focus:rn-text-accent-foreground data-[disabled]:rn-pointer-events-none data-[disabled]:rn-opacity-50",
      className
    )}
    {...props}
  >
    <span className="rn-absolute rn-left-2 rn-flex rn-h-3.5 rn-w-3.5 rn-items-center rn-justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="rn-h-2 rn-w-2 rn-fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      "rn-px-2 rn-py-1.5 rn-text-sm rn-font-semibold",
      inset && "rn-pl-8",
      className
    )}
    {...props}
  />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("rn--mx-1 rn-my-1 rn-h-px rn-bg-muted", className)}
    {...props}
  />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({
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
MenubarShortcut.displayname = "MenubarShortcut"

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}
