import React from "react";
import { MenuItem } from "@mui/material";
import { SwitchMode } from "components";
import { ModeContext } from "contexts";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBarComputer,
  AppBarMobile,
  AppBarWrapper,
  ButtonBar,
  MenuMobile,
  SectionsTypography,
} from "./AppBar.styles";

export const AppBar: React.FC = () => {
  interface SectionType {
    name: string;
    id: string;
  }
  const sections: SectionType[] = [
    {
      name: "Curriculo",
      id: "cv",
    },
    {
      name: "Sobre Mim",
      id: "about",
    },
    {
      name: "Habilidades",
      id: "skills",
    },
    {
      name: "Projetos",
      id: "projects",
    },
    {
      name: "Entre em Contato",
      id: "contact",
    },
    {
      name: "Onde me encontrar",
      id: "social",
    },
  ];
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { mode } = React.useContext(ModeContext);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBarWrapper className={mode}>
      <AppBarComputer>
        <SwitchMode />
        {sections.map((section, index) => {
          return (
              <SectionsTypography href={`#${section.id}`} className={mode} key={index}>
                {section.name}
              </SectionsTypography>
          );
        })}
      </AppBarComputer>

      <AppBarMobile>
        <SwitchMode />
        <ButtonBar className={mode} onClick={handleClick}>
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
              <MenuItem key={index}>
                <SectionsTypography href={`#${section.id}`}>
                  {section.name}
                </SectionsTypography>
              </MenuItem>
            );
          })}
        </MenuMobile>
      </AppBarMobile>
    </AppBarWrapper>
  );
};
