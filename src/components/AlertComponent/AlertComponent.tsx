import { Alert } from "@mui/material";
import { observer } from "mobx-react";

interface AlertComponentProps {
  message: string;
  severity: "error" | "info" | "success" | "warning";
}

const AlertComponent = observer(function AlertComponent({
  message,
  severity = "error",
}: AlertComponentProps) {
  return <Alert severity={severity}>{message}</Alert>;
});

export default AlertComponent;
