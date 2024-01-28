import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Resizable",
  component: ResizablePanelGroup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: any = {
  render: () => {
    return (
      <div className="rn-w-[500px] rn-h-[400px]">
        <ResizablePanelGroup
          direction="horizontal"
          className="rn-max-w-md rn-rounded-lg rn-border"
        >
          <ResizablePanel defaultSize={50}>
            <div className="rn-flex rn-h-[200px] rn-items-center rn-justify-center rn-p-6">
              <span className="rn-font-semibold">One</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={25}>
                <div className="rn-flex rn-h-full rn-items-center rn-justify-center rn-p-6">
                  <span className="rn-font-semibold">Two</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={75}>
                <div className="rn-flex rn-h-full rn-items-center rn-justify-center rn-p-6">
                  <span className="rn-font-semibold">Three</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    );
  },
};
