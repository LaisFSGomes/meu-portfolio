import { styled } from "@mui/system";

export const ButtonWrapper = styled("button")({
    background: "#601B80",
    color: "#FFFFFF",
    borderRadius: "50px",
    border: "none",
    height: "37px",
    minWidth: "107px",
    padding: "0 15px",
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.7em",
    fontWeight: 300,
    cursor: "pointer",
    ":hover": {
        background: "#581875",
    },
});