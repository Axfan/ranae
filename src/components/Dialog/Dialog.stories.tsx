import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/Button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/Label"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    return (
        <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="rn-sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="rn-grid rn-gap-4 rn-py-4">
            <div className="rn-grid rn-grid-cols-4 rn-items-center rn-gap-4">
              <Label htmlFor="name" className="rn-text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="John Smith"
                className="rn-col-span-3"
              />
            </div>
            <div className="rn-grid rn-grid-cols-4 rn-items-center rn-gap-4">
              <Label htmlFor="username" className="rn-text-right">
                Username
              </Label>
              <Input
                id="username"
                defaultValue="@johnsmith"
                className="rn-col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};
