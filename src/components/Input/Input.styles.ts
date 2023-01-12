import { FormControl } from "@mui/material";
import { styled } from "@mui/system";

export const Form = styled(FormControl)({
  width: "100%",
  "& label": {
    paddingLeft: "0.1em",
    fontWeight: 400,
    fontSize: "0.7em",
    color: "#FFFFFF",
    fontFamily: "Poppins, sans-serif",
  },
  "& label.Mui-focused": {
    color: "#FFFFFF",
    fontWeight: 500,
  },
  "& div": {
    background: "transparent",
    border: "0px",
    "& input": {
      color: "#FFFFFF",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 400,
      fontSize: "0.7em",
      paddingLeft: "1rem",
      border: "0px",
      textAlign: "left",
      background: "#49006A",
      borderRadius: "10px",
    },
    "& [type='textarea']": {
      height: "4rem",
    },
  },
});
