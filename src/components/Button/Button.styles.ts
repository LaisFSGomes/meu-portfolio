import { styled } from "@mui/system";

export const ButtonWrapper = styled("button")({
  borderRadius: "50px",
  border: "none",
  height: "37px",
  minWidth: "107px",
  padding: "0 15px",
  fontFamily: "Poppins, sans-serif",
  fontSize: "0.7em",
  fontWeight: 300,
  cursor: "pointer",  
  "&.dark": {
    background: "#601B80",
    color: "#FFFFFF",
    ":hover": {
      background: "#581875",
    },
  },
  "&.light": {
    background: "#D1D1D1",
    color: "#6B1D86",
    ":hover": {
      background: "#C4C4C4",
    },
  },
});
