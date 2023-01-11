import { Typography } from '@mui/material';
import { styled } from "@mui/system";

export const TitleTypography = styled(Typography)({
    fontFamily: "Poppins, sans-serif",
    color: "#FFFFFF",
    fontSize: "2em",
    fontWeight: 400,
    paddingBottom: "1em",
    zIndex: "2",
    textAlign: "center",
    "@media (max-width: 760px)": {
        paddingBottom: "0.5em",
        fontSize: "1.5em",
    },
});