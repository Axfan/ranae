import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Calendar } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;
const [date, setDate] = React.useState<Date | undefined>(new Date());

export const Primary: Story = {
  render: () => {
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rn-rounded-md rn-border"
      />
    );
  },
};
