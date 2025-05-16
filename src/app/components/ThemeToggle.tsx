"use client";

import React, {useCallback, useEffect, useState} from 'react';

const THEME_STORAGE_KEY = 'themePreference';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
    const [currentTheme, setCurrentTheme] = useState<Theme | null>(null);

    const applyTheme = useCallback((theme: Theme) => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
        localStorage.setItem(THEME_STORAGE_KEY, theme);
        setCurrentTheme(theme);
    }, []);

    useEffect(() => {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme) {
            applyTheme(savedTheme);
        } else {
            applyTheme(systemPrefersDark ? 'dark' : 'light');
        }
    }, [applyTheme]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            if (!localStorage.getItem(THEME_STORAGE_KEY)) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [applyTheme]);

    const toggleTheme = () => {
        applyTheme(currentTheme === 'light' ? 'dark' : 'light');
    };

    if (!currentTheme) {
        return null;
    }

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle-button"
            aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
        >
            {currentTheme === 'light' ? '🌙' : '☀️'}
        </button>
    );
}