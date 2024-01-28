import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Badge>Badge</Badge>
    );
  },
};

export const Secondary: Story = {
  render: () => {
    return (
      <Badge variant="secondary">Badge</Badge>
    );
  },
};

export const Destructive: Story = {
  render: () => {
    return (
      <Badge variant="destructive">Badge</Badge>
    );
  },
};

export const Outline: Story = {
  render: () => {
    return (
      <Badge variant="Outline">Badge</Badge>
    );
  },
};

