import type { Meta, StoryObj } from "@storybook/react";

import { Drilldown } from "./index";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Drilldown",
  component: Drilldown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Drilldown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    return (
      <Drilldown
        label="Please select a door"
        onSelect={(value) => console.log(value)}
        items={[
          {
            label: "Garage",
            children: [
              {
                label: "West",
                value: "west",
                icon: <ArrowLeftCircleIcon />,
              },
              {
                label: "East",
                value: "east",
                icon: <ArrowRightCircleIcon />,
              },
            ],
          },
          {
            label: "Doors",
            children: [
              {
                label: "Front",
                value: "front",
              },
              {
                label: "Exit",
                value: "exit",
              },
              {
                label: "Other",
                children: [
                  {
                    label: "Secret",
                    value: "secret",
                  },
                ],
              },
            ],
          },
        ]}
      ></Drilldown>
    );
  },
};
