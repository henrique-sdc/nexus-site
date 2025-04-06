import { useContext } from "react";
import { ThemeContext } from "src/context/ThemeProvider";

export const useTheme = () => {
  return useContext(ThemeContext);
};
