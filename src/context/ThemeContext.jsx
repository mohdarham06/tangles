import React, {
    createContext, useContext,
    useState
} from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [accentColor, setAccentColor] = useState('blue')

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
  