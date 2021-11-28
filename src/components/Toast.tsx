import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";
import { close, getStatus, ToastStatus } from "../store/toast";

function Toast() {
  const select:ToastStatus = useSelector(getStatus);
  const dispatch = useDispatch();

  return (
    <Snackbar open={select.open} autoHideDuration={2000}>
      <Alert
        onClose={() => dispatch(close())}
        severity={select.type}
        variant="filled"
      >
        {select.text}
      </Alert>
    </Snackbar>
  );
}

export default Toast;
