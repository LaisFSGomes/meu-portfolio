import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const FooterWrapper = styled(Box)({
  background: "#12001B",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "75px",
});

export const FooterTitle = styled(Typography)({
  color: "#FFFFFF",
  fontFamily: "Poppins, sans-serif",
  fontSize: "1em",
});
export const FooterGit = styled(Typography)({
  color: "#FFFFFF",
  fontFamily: "Poppins, sans-serif",
  fontSize: "0.8em",
});
