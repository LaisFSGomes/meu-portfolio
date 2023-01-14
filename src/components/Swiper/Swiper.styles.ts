import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const SwiperWrapper = styled(Box)({
    width: "90%",
    maxWidth: "100%",
    overflow: "auto",
    height: "70vh",
});

export const SwiperList = styled("ul")({
    display: "flex",
    minWidth: "90%",
    flexDirection: "row",
    listStyle: "none",
    padding: "0",
    margin: "0",
});