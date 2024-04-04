import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryHeader: Story = {
  args: {
    title: "Primary Header",
    color: "primary",
    typographyVariant: "h6",
    position: "static",
  },
};

export const SecondaryHeader: Story = {
  args: {
    ...PrimaryHeader.args,
    title: "Secondary Header",
    color: "secondary",
  },
};

export const ErrorHeader: Story = {
  args: {
    ...PrimaryHeader.args,
    title: "Error Header",
    color: "error",
  },
};

export const SuccessHeader: Story = {
  args: {
    ...PrimaryHeader.args,
    title: "Success Header",
    color: "success",
  },
};
