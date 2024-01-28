import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/Button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("rn-p-3", className)}
      classNames={{
        months: "rn-flex rn-flex-col sm:rn-flex-row rn-space-y-4 sm:rn-space-x-4 sm:rn-space-y-0",
        month: "rn-space-y-4",
        caption: "rn-flex rn-justify-center rn-pt-1 rn-relative rn-items-center",
        caption_label: "rn-text-sm rn-font-medium",
        nav: "rn-space-x-1 rn-flex rn-items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "rn-h-7 rn-w-7 rn-bg-transparent rn-p-0 rn-opacity-50 hover:rn-opacity-100"
        ),
        nav_button_previous: "rn-absolute rn-left-1",
        nav_button_next: "rn-absolute rn-right-1",
        table: "rn-w-full rn-border-collapse rn-space-y-1",
        head_row: "rn-flex",
        head_cell:
          "rn-text-muted-foreground rn-rounded-md rn-w-9 rn-font-normal rn-text-[0.8rem]",
        row: "rn-flex rn-w-full rn-mt-2",
        cell: "rn-h-9 rn-w-9 rn-text-center rn-text-sm rn-p-0 rn-relative [&:has([aria-selected].day-range-end)]:rn-rounded-r-md [&:has([aria-selected].day-outside)]:rn-bg-accent/50 [&:has([aria-selected])]:rn-bg-accent first:[&:has([aria-selected])]:rn-rounded-l-md last:[&:has([aria-selected])]:rn-rounded-r-md focus-within:rn-relative focus-within:rn-z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "rn-h-9 rn-w-9 rn-p-0 rn-font-normal aria-selected:rn-opacity-100"
        ),
        day_range_end: "rn-day-range-end",
        day_selected:
          "rn-bg-primary rn-text-primary-foreground hover:rn-bg-primary hover:rn-text-primary-foreground focus:rn-bg-primary focus:rn-text-primary-foreground",
        day_today: "rn-bg-accent rn-text-accent-foreground",
        day_outside:
          "rn-day-outside rn-text-muted-foreground rn-opacity-50 aria-selected:rn-bg-accent/50 aria-selected:rn-text-muted-foreground aria-selected:rn-opacity-30",
        day_disabled: "rn-text-muted-foreground rn-opacity-50",
        day_range_middle:
          "aria-selected:rn-bg-accent aria-selected:rn-text-accent-foreground",
        day_hidden: "rn-invisible",
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft className="rn-h-4 rn-w-4" />,
        IconRight: () => <ChevronRight className="rn-h-4 rn-w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
