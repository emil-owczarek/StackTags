import { AppBar, Toolbar, Typography } from "@mui/material";
import { observer } from "mobx-react";

interface HeaderProps {
  title: string;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "transparent"
    | "default"
    | "error"
    | "info"
    | "success"
    | "warning";
  typographyVariant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  position?: "fixed" | "absolute" | "sticky" | "static" | "relative";
}

const Header = observer(function Header({
  title,
  color = "primary",
  typographyVariant = "h6",
  position = "static",
}: HeaderProps) {
  return (
    <AppBar position={position} color={color}>
      <Toolbar>
        <Typography variant={typographyVariant} component="div">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
});

export default Header;
