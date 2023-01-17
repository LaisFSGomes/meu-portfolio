import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
const iconDark = require("assets/icons/contactdraw-dark.png");
const iconLight = require("assets/icons/contactdraw-light.png");

export const ContactMeWrapperDark = styled(Box)({
  backgroundImage: `url(${iconDark})`,
  backgroundSize: "90px 90px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  width: "150px",
  height: "150px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "#FFFFFF",
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
export const ContactMeWrapperLight = styled(Box)({
  backgroundImage: `url(${iconLight})`,
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
      fill: "#5A1779",
    },
  },
  "@media (max-width: 360px)": {
    width: "100px",
    height: "100px",
    backgroundSize: "80px 80px",
  },
});

export const Text = styled(Typography)({
  fontFamily: "Poppins, sans-serif",
  fontSize: "0.8em",
  "&.dark": {
    color: "#FFFFFF",
  },
  "&.light": {
    color: "#5A1779",
  },
});
