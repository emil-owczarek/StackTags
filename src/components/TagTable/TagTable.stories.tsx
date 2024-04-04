import type { Meta, StoryFn } from "@storybook/react";

import TagTable from "./TagTable";

const meta: Meta<typeof TagTable> = {
  title: "Components/TagTable",
  component: TagTable,
};

export default meta;

export const Base: StoryFn<typeof TagTable> = () => <TagTable />;
