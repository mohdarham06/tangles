import React from 'react';
import { createContext, useContext } from 'react';
// import { useState } from 'react';
// LocalStorage Custom Hook
import useLocalStorage from '../hooks/useLocalStorage';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    const [accentColor, setAccentColor] = useLocalStorage('accentColor', 'blue')

    const toggleTheme = () => {
        setTheme(
            (prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')
        )
        console.log(theme)
    }

    const changeAccentColor = (newColor) => {
        setAccentColor(newColor);
        console.log(newColor)
    };


    return (
        <ThemeContext.Provider
            value={{ theme, accentColor, toggleTheme, changeAccentColor }}
        >
            {children}
        </ThemeContext.Provider>
    )
}


export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
