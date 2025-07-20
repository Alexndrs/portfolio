import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeHooks";
import type { Theme } from "./ThemeHooks";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        // Récupère le thème du localStorage ou utilise 'dark' par défaut
        if (typeof window !== 'undefined') {
            return (localStorage.getItem('theme') as Theme) || 'dark';
        }
        return 'dark';
    });

    useEffect(() => {
        // Applique le thème au document
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}