import type { Meta, StoryObj } from "@storybook/react";
import Pagination from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    disabled: {
      control: "boolean",
    },
    page: {
      control: "number",
    },
    tagsPerPage: {
      control: "number",
    },
    handleChangePage: { action: "handleChangePage" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultPagination: Story = {
  args: {
    page: 1,
    tagsPerPage: 10,
    disabled: false,
  },
};

export const DisabledPagination: Story = {
  args: {
    page: 1,
    tagsPerPage: 10,
    disabled: true,
  },
};

export const CustomStartingPage: Story = {
  args: {
    page: 3,
    tagsPerPage: 10,
    disabled: false,
  },
};
