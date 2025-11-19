import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: (v: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});
const useTheme = (): ThemeContextType => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("error");
  }
  return ctx;
};
export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setState] = useState<Theme>("light");
  const toggleTheme = () => {
    setState((prev) => (prev == "light" ? "dark" : "light"));
  };

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme], // setTheme i toggleTheme są stabilne (funkcja z useState / zamknięta nad setTheme)
  );
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
