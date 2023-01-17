import { Typography } from '@mui/material';
import { styled } from "@mui/system";

export const TitleTypography = styled(Typography)({
    fontFamily: "Poppins, sans-serif",
    fontSize: "2em",
    fontWeight: 400,
    paddingBottom: "1em",
    zIndex: "2",
    textAlign: "center",
    "&.dark": {
        color: "#FFFFFF",
    },
    "&.light": {
        color: "#6B1D86",
    },
    "@media (max-width: 760px)": {
        paddingBottom: "0.5em",
        fontSize: "1.5em",
    },
});