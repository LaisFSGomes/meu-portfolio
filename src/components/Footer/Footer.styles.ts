import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const FooterWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "75px",
  "&.dark": {
    background: "#12001B",
  },
  "&.light": {
    background: "#C1C1C1",
  },
});

export const FooterTitle = styled(Typography)({
  fontFamily: "Poppins, sans-serif",
  fontSize: "1em",
  textAlign: "center",
  "&.dark": {
    color: "#FFFFFF",
  },
  "&.light": {
    color: "#6B1D86",
  },
});

export const FooterGit = styled(Typography)({
  fontFamily: "Poppins, sans-serif",
  fontSize: "0.8em",
  textAlign: "center",
  "&.dark": {
    color: "#FFFFFF",
  },
  "&.light": {
    color: "#6B1D86",
  },
});
