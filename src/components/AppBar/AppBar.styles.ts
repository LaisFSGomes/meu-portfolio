import { styled } from "@mui/system";
import { Box, IconButton, Menu } from "@mui/material";

export const AppBarWrapper = styled(Box)({
  height: "50px",
  display: "flex",
  justifyContent: "space-evenly",
  padding: "0 20px",
  zIndex: "100",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  "&.dark": {
    background: "#49006A",
  },
  "&.light": {
    background: "#E1E1E1",
  },
  "@media (max-width: 600px)": {
    height: "40px",
  },
});

export const AppBarComputer = styled(Box)({
  width: "90%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "@media (max-width: 940px)": {
    width: "90%",
  },
  "@media (max-width: 775px)": {
    display: "none",
  },

});

export const InfoWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "50px",
  "@media (max-width: 1300px)": {
    gap: "30px",
  },
  "@media (max-width: 1100px)": {
    gap: "20px",
  },
  "@media (max-width: 860px)": {
    gap: "10px",
  },
});

export const SectionsTypography = styled("a")({
  zIndex: "100",
  fontSize: "15px",
  fontWeight: 550,
  position: "relative",
  left: "0",
  right: "100px",
  transition: "all 0.3s ease-in-out", 
  cursor: "pointer",
  textTransform: "uppercase",
  fontFamily: "Poppins, sans-serif",
  "&.dark": {
    color: "#FFFFFF",
    "&:hover": {
      color: "#BFB7B7",
    },
  },
  "&.light": {
    color: "#6B1D86",
    "&:hover": {
      color: "#49006A",
    },
  },
  "@media (max-width: 1300px)": {
    fontSize: "16px",
    letterSpacing: "0.05em",
  },
  "@media (max-width: 1000px)": {
    fontSize: "14px",
    letterSpacing: "0.01em",
  },
  "@media (max-width: 775px)": {
    width: "100%",
    height: "100%",
    color: "#49006A",
    "&:hover": {
      color: "#601B81",
    },
  },
});

export const AppBarMobile = styled(Box)({
  display: "none",
  "@media (max-width: 775px)": {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
  },
});

export const ButtonBar = styled(IconButton)({
  "&.dark": {
    "& svg": {
      color: "#FFFFFF",
    },
  },
  "&.light": {
    "& svg": {
      color: "#6B1D86",
    },
  },
  "&:hover": {
    background: "transparent",
  },
});

export const MenuMobile = styled(Menu)({
  "& .MuiPaper-root": {
    zIndex: "1",
    background: "#D1D1D1",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    textAlight: "center",
    "& .MuiMenuItem-root": {
      "&:hover": {
        background: "#e1e1e1",
      },
    },
  },
});
