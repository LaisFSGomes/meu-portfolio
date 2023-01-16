import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const MyProjectsWrapper = styled(Box)({
    background: "#2C0041",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "2em",
    
});
export const Container = styled(Box)({
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px 1rem",
    zIndex: "10",
    "@media (max-width: 900px)": {
        padding: "20px 0.8rem",
    },
    "@media (max-width: 800px)": {
        padding: "0rem",
    },
    "@media (max-width: 570px)": {
      
    },
    "@media (max-width: 420px)": {
      
    },
    "@media (max-width: 290px)": {
      
    },
});
