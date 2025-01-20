import React, { createContext, useContext, useEffect, useState } from 'react';
const ThemeContext = createContext({
    theme: 'dark',
    toggleTheme: () => { },
});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        console.log('theme selection', theme);
        
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use ThemeContext
export const useTheme = () => useContext(ThemeContext);
