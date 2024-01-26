import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { ChevronsUpDown, Plus, X } from "lucide-react"
 
import { Button } from "@/components/Button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Collapsible",
  component: Collapsible,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="rn-w-[350px] rn-space-y-2"
      >
        <div className="rn-flex rn-items-center rn-justify-between rn-space-x-4 rn-px-4">
          <h4 className="rn-text-sm rn-font-semibold">
            @peduarte starred 3 repositories
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="rn-w-9 rn-p-0">
              <ChevronsUpDown className="rn-h-4 rn-w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rn-rounded-md rn-border rn-px-4 rn-py-3 rn-font-mono rn-text-sm">
          @radix-ui/primitives
        </div>
        <CollapsibleContent className="rn-space-y-2">
          <div className="rn-rounded-md rn-border rn-px-4 rn-py-3 rn-font-mono rn-text-sm">
            @radix-ui/colors
          </div>
          <div className="rn-rounded-md rn-border rn-px-4 rn-py-3 rn-font-mono rn-text-sm">
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};
