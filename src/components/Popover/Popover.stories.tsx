import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Label } from "@/components/Label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/Popover"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    return (
        <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent className="rn-w-80">
          <div className="rn-grid rn-gap-4">
            <div className="rn-space-y-2">
              <h4 className="rn-font-medium rn-leading-none">Dimensions</h4>
              <p className="rn-text-sm rn-text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>
            <div className="rn-grid rn-gap-2">
              <div className="rn-grid rn-grid-cols-3 rn-items-center rn-gap-4">
                <Label htmlFor="width">Width</Label>
                <Input
                  id="width"
                  defaultValue="100%"
                  className="rn-col-span-2 rn-h-8"
                />
              </div>
              <div className="rn-grid rn-grid-cols-3 rn-items-center rn-gap-4">
                <Label htmlFor="maxWidth">Max. width</Label>
                <Input
                  id="maxWidth"
                  defaultValue="300px"
                  className="rn-col-span-2 rn-h-8"
                />
              </div>
              <div className="rn-grid rn-grid-cols-3 rn-items-center rn-gap-4">
                <Label htmlFor="height">Height</Label>
                <Input
                  id="height"
                  defaultValue="25px"
                  className="rn-col-span-2 rn-h-8"
                />
              </div>
              <div className="rn-grid rn-grid-cols-3 rn-items-center rn-gap-4">
                <Label htmlFor="maxHeight">Max. height</Label>
                <Input
                  id="maxHeight"
                  defaultValue="none"
                  className="rn-col-span-2 rn-h-8"
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  },
};
