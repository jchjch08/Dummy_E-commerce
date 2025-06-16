import { createContext, useState, useEffect, ReactNode } from "react";
export const ThemeContext = createContext<{ theme: string; toggle: () => void }>({ theme: "light", toggle: () => {} });
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const t = localStorage.getItem("theme") || "light";
    setTheme(t);
    document.documentElement.className = t;
  }, []);
  const toggle = () => {
    const t = theme === "light" ? "dark" : "light";
    setTheme(t);
    document.documentElement.className = t;
    localStorage.setItem("theme", t);
  };
  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}
