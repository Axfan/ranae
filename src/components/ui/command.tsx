import * as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "rn-flex rn-h-full rn-w-full rn-flex-col rn-overflow-hidden rn-rounded-md rn-bg-popover rn-text-popover-foreground",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="rn-overflow-hidden rn-p-0 rn-shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:rn-px-2 [&_[cmdk-group-heading]]:rn-font-medium [&_[cmdk-group-heading]]:rn-text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:rn-pt-0 [&_[cmdk-group]]:rn-px-2 [&_[cmdk-input-wrapper]_svg]:rn-h-5 [&_[cmdk-input-wrapper]_svg]:rn-w-5 [&_[cmdk-input]]:rn-h-12 [&_[cmdk-item]]:rn-px-2 [&_[cmdk-item]]:rn-py-3 [&_[cmdk-item]_svg]:rn-h-5 [&_[cmdk-item]_svg]:rn-w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="rn-flex rn-items-center rn-border-b rn-px-3" cmdk-input-wrapper="">
    <Search className="rn-mr-2 rn-h-4 rn-w-4 rn-shrink-0 rn-opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "rn-flex rn-h-11 rn-w-full rn-rounded-md rn-bg-transparent rn-py-3 rn-text-sm rn-outline-none placeholder:rn-text-muted-foreground disabled:rn-cursor-not-allowed disabled:rn-opacity-50",
        className
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("rn-max-h-[300px] rn-overflow-y-auto rn-overflow-x-hidden", className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="rn-py-6 rn-text-center rn-text-sm"
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "rn-overflow-hidden rn-p-1 rn-text-foreground [&_[cmdk-group-heading]]:rn-px-2 [&_[cmdk-group-heading]]:rn-py-1.5 [&_[cmdk-group-heading]]:rn-text-xs [&_[cmdk-group-heading]]:rn-font-medium [&_[cmdk-group-heading]]:rn-text-muted-foreground",
      className
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("rn--mx-1 rn-h-px rn-bg-border", className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "rn-relative rn-flex rn-cursor-default rn-select-none rn-items-center rn-rounded-sm rn-px-2 rn-py-1.5 rn-text-sm rn-outline-none aria-selected:rn-bg-accent aria-selected:rn-text-accent-foreground data-[disabled]:rn-pointer-events-none data-[disabled]:rn-opacity-50",
      className
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
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
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
