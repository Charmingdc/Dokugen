import React, { createContext, useState, useEffect, useContext } from 'react';

// Define Theme Context Type
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Create Context with Default Values
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


// ThemeProvider Component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getSystemTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // Get theme from localStorage or default to system theme
  const storedTheme = localStorage.getItem('DokugenTheme') || getSystemTheme();
  const [theme, setTheme] = useState<string>(storedTheme);

  // Apply theme class to <body>
  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  // Toggle theme and persist it to localStorage
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('DokugenTheme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook for Using Theme
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  return context;
};