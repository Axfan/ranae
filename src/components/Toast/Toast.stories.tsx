import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Button } from "@/components/Button";
import { ToastAction, useToast, Toaster } from "@/components/Toast";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Toast",
  component: ToastAction,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof ToastAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: any = {
  render: () => {
    const { toast } = useToast();

    return (
      <div>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: "Scheduled: Catch up ",
              description: "Friday, February 10, 2023 at 5:57 PM",
              action: (
                <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
              ),
            });
          }}
        >
          Add to calendar
        </Button>
        <Toaster />
      </div>
    );
  },
};
