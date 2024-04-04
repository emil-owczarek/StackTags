import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SearchIcon from "@mui/icons-material/Search";
import NoteIcon from "@mui/icons-material/Note";
import LockIcon from "@mui/icons-material/Lock";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PasswordInput: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    value: "",
    onChange: () => {},
    icon: <LockIcon />,
    fullWidth: true,
    variant: "outlined",
    size: "medium",
  },
};

export const SearchInput: Story = {
  args: {
    ...PasswordInput.args,
    label: "Search",
    placeholder: "Search here...",
    type: "search",
    icon: <SearchIcon />,
    size: "small",
  },
};

export const WithEndAdornment: Story = {
  args: {
    ...PasswordInput.args,
    label: "Username",
    placeholder: "Username",
    InputAdornmentEnd: <VisibilityIcon />,
    size: "medium",
  },
};

export const NotesInput: Story = {
  args: {
    ...PasswordInput.args,
    label: "Notes",
    placeholder: "Add your notes here...",
    rows: 4,
    icon: <NoteIcon />,
  },
};
