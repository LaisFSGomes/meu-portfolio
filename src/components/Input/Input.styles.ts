import { FormControl } from "@mui/material";
import { styled } from "@mui/system";

export const Form = styled(FormControl)({
  width: "100%",
  "&.dark": {
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
  },
  "&.light": {
    "& label": {
      paddingLeft: "0.1em",
      fontWeight: 400,
      fontSize: "0.7em",
      color: "#6B1D86",
      fontFamily: "Poppins, sans-serif",
    },
    "& label.Mui-focused": {
      color: "#6B1D86",
      fontWeight: 500,
    },
    "& div": {
      background: "transparent",
      border: "0px",
      "& input": {
        color: "#6B1D86",
        fontFamily: "Poppins, sans-serif",
        fontWeight: 400,
        fontSize: "0.7em",
        paddingLeft: "1rem",
        border: "0px",
        textAlign: "left",
        background: "#D1D1D1",
        borderRadius: "10px",
      },
      "& [type='textarea']": {
        height: "4rem",
      },
    },
  },
});
