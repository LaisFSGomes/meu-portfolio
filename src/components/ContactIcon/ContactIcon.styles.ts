import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
const icon = require("assets/icons/contactdraw.png");

export const ContactMeWrapper = styled(Box)({
  backgroundImage: `url(${icon})`,
  backgroundSize: "90px 90px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  width: "150px",
  height: "150px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  "& svg": {
    "& path": {
      fill: "#FFFFFF",
    },
  },
  "@media (max-width: 360px)": {
    width: "100px",
    height: "100px",
    backgroundSize: "80px 80px",
  },
});

export const Text = styled(Typography)({
  color: "#FFFFFF",
  fontFamily: "Poppins, sans-serif",
  fontSize: "0.8em",
});