import {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useState,
} from "react";

type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: (v: ThemeContextType["theme"]) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

function useThemeContext() {
  const ctx = useContext(ThemeContext);
  if (!ctx) return;
  return ctx;
}

export const ThemeContextProvider: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeContextType["theme"]>("light");

  const toggleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
