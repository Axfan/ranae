import type { Meta, StoryObj } from "@storybook/react";

import {
    ScrollArea
} from "@/components/ScrollArea";
import { Separator } from "@/components/Separator"
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/ScrollArea",
  component: ScrollArea,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  )

export const Primary: Story = {
  render: () => {
    return (
        <ScrollArea className="rn-h-72 rn-w-48 rn-rounded-md rn-border">
        <div className="rn-p-4">
          <h4 className="rn-mb-4 rn-text-sm rn-font-medium rn-leading-none">Tags</h4>
          {tags.map((tag) => (
            <>
              <div key={tag} className="rn-text-sm">
                {tag}
              </div>
              <Separator className="rn-my-2" />
            </>
          ))}
        </div>
      </ScrollArea>
    );
  },
};
