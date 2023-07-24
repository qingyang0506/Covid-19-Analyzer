import { createContext, useCallback, useContext, useMemo } from "react";
import { themeSettings } from "../theme";
import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import { ColorData } from "../Type";
import useLocalStorageProvider from "./LocalStorageProvider";

const ColorContext = createContext({} as ColorData);
// @ts-ignore
export const ColorProvider = ({ children }) => {
  const [colorMode, setColorMode] = useLocalStorageProvider(
    "mode",
    "light" as PaletteMode
  );

  const setLightMode = useCallback(() => {
    setColorMode("light");
  }, [colorMode, setColorMode]);

  const setDarkMode = useCallback(() => {
    setColorMode("dark");
  }, [colorMode, setColorMode]);

  const theme = useMemo(
    () => createTheme(themeSettings(colorMode)),
    [colorMode]
  );

  const data = {
    colorMode,
    setLightMode,
    setDarkMode,
    theme,
  };
  return <ColorContext.Provider value={data}>{children}</ColorContext.Provider>;
};

export const useColorContext = () => useContext(ColorContext);
