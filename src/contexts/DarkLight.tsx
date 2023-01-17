import React from "react";

interface ModeProps {
    mode: "light" | "dark";
}
interface ModeProviderProps {
    children: React.ReactNode;
}
interface ModeContextProps {
    mode: "light" | "dark";
    darkMode: () => void;
    lightMode: () => void;
}
export const ModeContext = React.createContext<ModeContextProps>({
    mode: "light",
    darkMode: () => {},
    lightMode: () => {},
});
export const ModeProvider: React.FC<ModeProviderProps> = ({ children }) => {
    const [mode, setMode] = React.useState<ModeProps["mode"]>("light");

    const darkMode = () => setMode("dark");
    const lightMode = () => setMode("light");
    return (
        <ModeContext.Provider value={{ mode, darkMode, lightMode }}>
            {children}
        </ModeContext.Provider>
    );
};