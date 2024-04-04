import type { Meta, StoryObj } from "@storybook/react";

import AlertComponent from "./AlertComponent";

const meta: Meta<typeof AlertComponent> = {
  title: "Components/AlertComponent",
  component: AlertComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    message: "This is an alert message",
    severity: "error",
  },
};

export const Info: Story = {
  args: {
    ...Base.args,
    severity: "info",
  },
};

export const Success: Story = {
  args: {
    ...Base.args,
    severity: "success",
  },
};

export const Warning: Story = {
  args: {
    ...Base.args,
    severity: "warning",
  },
};

export const Error: Story = {
  args: {
    ...Base.args,
    severity: "error",
  },
};
