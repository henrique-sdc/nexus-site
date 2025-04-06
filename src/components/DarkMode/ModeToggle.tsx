import React from "react";
import { useTheme } from "src/hooks/useTheme";
import { Sun, Moon } from "lucide-react";

const ModeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md focus:outline-none transition-colors"
    >
      {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>
  );
};

export default ModeToggle;
