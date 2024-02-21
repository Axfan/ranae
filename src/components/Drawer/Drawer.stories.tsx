import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { ArrowRightIcon, CheckCircle, CheckCircleIcon, CheckIcon, ChevronRightIcon, Minus, Plus } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { Button } from "@/components/Button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./index";
import { Separator } from "@/components/Separator";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: object = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    const [goal, setGoal] = React.useState(350);

    function onClick(adjustment: number) {
      setGoal(Math.max(200, Math.min(400, goal + adjustment)));
    }

    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="rn-mx-auto rn-w-full rn-max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>
                Set your daily activity goal.
              </DrawerDescription>
            </DrawerHeader>
            <div className="rn-p-4 rn-pb-0">
              <div className="rn-flex rn-items-center rn-justify-center rn-space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rn-h-8 rn-w-8 rn-shrink-0 rn-rounded-full"
                  onClick={() => onClick(-10)}
                  disabled={goal <= 200}
                >
                  <Minus className="rn-h-4 rn-w-4" />
                  <span className="rn-sr-only">Decrease</span>
                </Button>
                <div className="rn-flex-1 rn-text-center">
                  <div className="rn-text-7xl rn-font-bold rn-tracking-tighter">
                    {goal}
                  </div>
                  <div className="rn-text-[0.70rem] rn-uppercase rn-text-muted-foreground">
                    Calories/day
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="rn-h-8 rn-w-8 rn-shrink-0 rn-rounded-full"
                  onClick={() => onClick(10)}
                  disabled={goal >= 400}
                >
                  <Plus className="rn-h-4 rn-w-4" />
                  <span className="rn-sr-only">Increase</span>
                </Button>
              </div>
              <div className="rn-mt-3 rn-h-[120px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <Bar
                      dataKey="goal"
                      style={
                        {
                          fill: "hsl(var(--foreground))",
                          opacity: 0.9,
                        } as React.CSSProperties
                      }
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    );
  },
};

export const ActionDrawer: Story = {
  render: () => {
    return (
      <Drawer>
        <DrawerTrigger asChild>
            <div className="rn-flex rn-w-60 hover:rn-bg-slate-100 rn-px-1 rn-py-2 hover:rn-cursor-pointer">
              <div className="rn-flex rn-grow">
                <CheckCircleIcon className="rn-mr-4 rn-text-emerald-400"/>
                Temp
              </div>
              <div className="rn-flex rn-text-gray-500">
                24C <ChevronRightIcon />
              </div>
            </div>
        </DrawerTrigger>
        <DrawerContent>
          <div className="rn-mx-auto rn-w-full rn-max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Temperature</DrawerTitle>
              <DrawerDescription>
                Actions
              </DrawerDescription>
            </DrawerHeader>
            <div className="rn-p-4 rn-pb-0">
              <Button className="rn-w-full" variant="outline">
                View Historical
              </Button>
              <div className="rn-my-3">

              </div>
              <Button className="rn-w-full" variant="outline">
                Report Issue
              </Button>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="ghost">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    );
  },
};
