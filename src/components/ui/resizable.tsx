import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"
import React from "react"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "rn-flex rn-h-full rn-w-full data-[panel-group-direction=vertical]:rn-flex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "rn-relative rn-flex rn-w-px rn-items-center rn-justify-center rn-bg-border after:rn-absolute after:rn-inset-y-0 after:rn-left-1/2 after:rn-w-1 after:rn--translate-x-1/2 focus-visible:rn-outline-none focus-visible:rn-ring-1 focus-visible:rn-ring-ring focus-visible:rn-ring-offset-1 data-[panel-group-direction=vertical]:rn-h-px data-[panel-group-direction=vertical]:rn-w-full data-[panel-group-direction=vertical]:after:rn-left-0 data-[panel-group-direction=vertical]:after:rn-h-1 data-[panel-group-direction=vertical]:after:rn-w-full data-[panel-group-direction=vertical]:after:rn--translate-y-1/2 data-[panel-group-direction=vertical]:after:rn-translate-x-0 [&[data-panel-group-direction=vertical]>div]:rn-rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="rn-z-10 rn-flex rn-h-4 rn-w-3 rn-items-center rn-justify-center rn-rounded-sm rn-border rn-bg-border">
        <GripVertical className="rn-h-2.5 rn-w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
