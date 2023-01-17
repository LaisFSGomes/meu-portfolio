import React from "react";
import { MenuItem } from "@mui/material";
import {
  AppBarComputer,
  AppBarMobile,
  AppBarWrapper,
  ButtonBar,
  MenuMobile,
  SectionsTypography,
} from "./AppBar.styles";
import MenuIcon from "@mui/icons-material/Menu";
import { SwitchMode } from "components/SwitchMode";
export const AppBar: React.FC = () => {
  const sections = [
    "Curriculo",
    "Sobre Mim",
    "Habilidades",
    "Projetos",
    "Entre em Contato",
    "Onde me encontrar",
  ];
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBarWrapper>
      <AppBarComputer>
      <SwitchMode />
        {sections.map((section, index) => {
          return <SectionsTypography key={index}>{section}</SectionsTypography>;
        })}
      </AppBarComputer>
      <AppBarMobile>
      <SwitchMode />
        <ButtonBar onClick={handleClick}>
          <MenuIcon />
        </ButtonBar>
        
        <MenuMobile
          id="menu-mobile"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        > 
        {sections.map((section, index) => {
          return (
            <MenuItem key={index} >
                <SectionsTypography>{section}</SectionsTypography>
            </MenuItem>
          )
        })}
        </MenuMobile>
      </AppBarMobile>
    </AppBarWrapper>
  );
};
