import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "rn-relative rn-z-10 rn-flex rn-max-w-max rn-flex-1 rn-items-center rn-justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "rn-group rn-flex rn-flex-1 rn-list-none rn-items-center rn-justify-center rn-space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "rn-group rn-inline-flex rn-h-10 rn-w-max rn-items-center rn-justify-center rn-rounded-md rn-bg-background rn-px-4 rn-py-2 rn-text-sm rn-font-medium rn-transition-colors hover:rn-bg-accent hover:rn-text-accent-foreground focus:rn-bg-accent focus:rn-text-accent-foreground focus:rn-outline-none disabled:rn-pointer-events-none disabled:rn-opacity-50 data-[active]:rn-bg-accent/50 data-[state=open]:rn-bg-accent/50"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "rn-group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="rn-relative rn-top-[1px] rn-ml-1 rn-h-3 rn-w-3 rn-transition rn-duration-200 group-data-[state=open]:rn-rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "rn-left-0 rn-top-0 rn-w-full data-[motion^=from-]:rn-animate-in data-[motion^=to-]:rn-animate-out data-[motion^=from-]:rn-fade-in data-[motion^=to-]:rn-fade-out data-[motion=from-end]:rn-slide-in-from-right-52 data-[motion=from-start]:rn-slide-in-from-left-52 data-[motion=to-end]:rn-slide-out-to-right-52 data-[motion=to-start]:rn-slide-out-to-left-52 md:rn-absolute md:rn-w-auto rn-",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("rn-absolute rn-left-0 rn-top-full rn-flex rn-justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "rn-origin-top-center rn-relative rn-mt-1.5 rn-h-[var(--radix-navigation-menu-viewport-height)] rn-w-full rn-overflow-hidden rn-rounded-md rn-border rn-bg-popover rn-text-popover-foreground rn-shadow-lg data-[state=open]:rn-animate-in data-[state=closed]:rn-animate-out data-[state=closed]:rn-zoom-out-95 data-[state=open]:rn-zoom-in-90 md:rn-w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "rn-top-full rn-z-[1] rn-flex rn-h-1.5 rn-items-end rn-justify-center rn-overflow-hidden data-[state=visible]:rn-animate-in data-[state=hidden]:rn-animate-out data-[state=hidden]:rn-fade-out data-[state=visible]:rn-fade-in",
      className
    )}
    {...props}
  >
    <div className="rn-relative rn-top-[60%] rn-h-2 rn-w-2 rn-rotate-45 rn-rounded-tl-sm rn-bg-border rn-shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
