import React, {
  createContext,
  FunctionComponent,
  useContext,
  useMemo,
  useState,
} from "react";

type Theme = "light" | "dark";
type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export const useTheme = (): ThemeContextType => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
};

export const ThemeContextProvider: FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const val = useMemo(() => {
    return { theme, setTheme, toggleTheme };
  }, [theme]);

  return <ThemeContext.Provider value={val}>{children}</ThemeContext.Provider>;
};
