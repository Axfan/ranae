import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    return (
        <Button>Button</Button>
    );
  },
};

export const Secondary: Story = {
  render: () => {
    return (
        <Button variant="secondary">Button</Button>
    );
  },
};

export const Destructive: Story = {
  render: () => {
    return (
        <Button variant="destructive">Button</Button>
    );
  },
};

export const Outline: Story = {
  render: () => {
    return (
        <Button variant="outline">Button</Button>
    );
  },
};

export const Ghost: Story = {
  render: () => {
    return (
        <Button variant="ghost">Button</Button>
    );
  },
};

export const Link: Story = {
  render: () => {
    return (
        <Button variant="link">Button</Button>
    );
  },
};
