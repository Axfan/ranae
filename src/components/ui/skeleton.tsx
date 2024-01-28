import { cn } from "@/lib/utils"
import React from 'react';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rn-animate-pulse rn-rounded-md rn-bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
