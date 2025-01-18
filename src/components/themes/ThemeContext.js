import React, { createContext, useContext, useEffect, useState } from 'react';

// Create Context
const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => { },
});

// ThemeProvider Component
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    // Toggle theme between 'light' and 'dark'
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    // Apply theme to the <body>
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
