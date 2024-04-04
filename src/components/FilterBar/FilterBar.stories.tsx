import type { Meta, StoryFn } from "@storybook/react";

import FilterBar from "./FilterBar";

const meta: Meta<typeof FilterBar> = {
  title: "Components/FilterBar",
  component: FilterBar,
};

export default meta;

export const Base: StoryFn<typeof FilterBar> = () => <FilterBar />;
