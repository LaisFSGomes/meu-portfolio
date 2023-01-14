import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const SwiperItemWrapper = styled (Box)({
    width: "100%",
    flexShrink: 0,
    display: "flex",
    // flexDirection: "column-reverse",
    height: "70vh",
    transition: "width 3s",
    "&:hover": {
        transition: "width 3s",
        "& > img": {
            width: "0px",
        },
        "& > div": {
            width: "100%",
            color: "#2C0041",
        }
    }
});
export const SwiperImage = styled ("img")({
    width: "100%",
    height: "auto",
    userSelect: "none",
    objectFit: "none",
    objectPosition: "50% 0%",
    transition: "all 2s ",
});
export const SwiperItemInfo = styled (Box)({
    width: "0%",
    display: "flex",  
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    color: "transparent",
    fontFamily: "Poppins, sans-serif",
    fontSize: "2em",
    fontWeight: 300,
    transition: "all 2s",
});