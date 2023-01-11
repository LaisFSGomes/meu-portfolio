import { Box, Typography } from '@mui/material';
import { styled } from "@mui/system";

export const AboutWrapper = styled(Box)({
    background: "#2C0041",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "2em",
});

export const AboutText = styled(Typography)({
    fontSize: "1em",
    fontWeight: 400,
    paddingLeft: "20px",    
    textAlign: "justify",
    color: "#FFFFFF",
    width: "60%",
    "@media (max-width: 460px)": {
        width: "80%",
    },
    "@media (max-width: 320px)": {
        width: "95%",
        fontSize: "0.8em",
    },
});