import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "@/components/Skeleton";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    return (
      <div className="rn-flex rn-items-center rn-space-x-4">
        <Skeleton className="rn-h-12 rn-w-12 rn-rounded-full" />
        <div className="rn-space-y-2">
          <Skeleton className="rn-h-4 rn-w-[250px]" />
          <Skeleton className="rn-h-4 rn-w-[200px]" />
        </div>
      </div>
    );
  },
};
