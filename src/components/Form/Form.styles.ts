import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const FormWrapper = styled(Box)({
  background: "#2C0041",
  display: "grid",
  placeItems: "center",
});

export const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "50%",
  paddingBottom: "2em",
  gap: "0.7em",
  "@media (max-width: 570px)": {
    width: "80%",
  },
  "@media (max-width: 290px)": {
    width: "90%",
  },
});
