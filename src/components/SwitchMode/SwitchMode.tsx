import React from "react";
import { SwitchUI } from "./SwitchMode.styles";
import { ModeContext } from "contexts/DarkLight";

export const SwitchMode: React.FC = () => {
  const { mode, darkMode, lightMode } = React.useContext(ModeContext);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? darkMode() : lightMode();
  };

  return (
    <React.Fragment>
      <SwitchUI value={mode} onChange={onChange} />
    </React.Fragment>
  );
};
