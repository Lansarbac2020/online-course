import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (darkMode) => {
      if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      setIsDarkMode(darkMode);
    };

    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      applyTheme(storedTheme === 'dark');
    } else {
      applyTheme(mediaQuery.matches);
    }

    const handleChange = (event) => {
      if (!localStorage.getItem('theme')) {
        applyTheme(event.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return { isDarkMode, toggleTheme };
};

export default useDarkMode;
