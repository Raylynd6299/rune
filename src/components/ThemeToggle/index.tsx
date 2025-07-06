import { useTheme } from '@/hooks/useTheme';
import React from 'react'
import { FaSun, FaMoon } from "react-icons/fa";
import { Button } from '../Button';


export const ThemeToggle = (): React.ReactElement => {
    const { theme, setTheme } = useTheme();

    const handleToggle = (): void => {
        console.log('Current theme:', theme);
        
        // Cycle through themes: light -> dark -> system -> light
        if (theme === "light") {
            setTheme("dark");
        } else if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("light");
        }
    };

    // Determine the effective theme for icon display
    const getEffectiveTheme = () => {
        if (theme === "system") {
            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }
        return theme;
    };

    const effectiveTheme = getEffectiveTheme();

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={handleToggle}
            className="h-10 w-10"
            title={`Current theme: ${theme}`}
        >
            <FaSun className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 ${
                effectiveTheme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
            }`} />
            <FaMoon className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 ${
                effectiveTheme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
            }`} />
            <span className="sr-only">Toggle theme (current: {theme})</span>
        </Button>
    );
}
