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

export const AboutTitle = styled(Typography)({
    fontFamily: "Poppins, sans-serif",
    color: "#FFFFFF",
    fontSize: "2em",
    fontWeight: 400,
    paddingBottom: "1em",
    "@media (max-width: 760px)": {
        paddingBottom: "0.5em",
        fontSize: "1.5em",
    },
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
})