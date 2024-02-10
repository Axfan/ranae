import type { Meta, StoryObj } from "@storybook/react";

import { CopyText, CopyButton } from "@/components/Copy";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Copy",
  component: CopyText,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof CopyText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    return (
      <div>
        <div>
          <CopyText>Hello</CopyText>
        </div>
      </div>
    );
  },
};


export const Button: Story = {
    render: () => {
      return (
        <div>
          <div>
            <CopyButton value="test" />
          </div>
        </div>
      );
    },
  };
  