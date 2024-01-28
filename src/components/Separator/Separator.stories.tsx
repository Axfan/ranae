import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Separator } from "@/components/Separator";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Separator",
  component: Separator,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    return (
      <div>
        <div className="rn-space-y-1">
          <h4 className="rn-text-sm rn-font-medium rn-leading-none">Ranae</h4>
          <p className="rn-text-sm rn-text-muted-foreground">
            A component library.
          </p>
        </div>
        <Separator className="rn-my-4" />
        <div className="rn-flex rn-h-5 rn-items-center rn-space-x-4 rn-text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
    );
  },
};
