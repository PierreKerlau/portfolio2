import { useEffect, useState } from 'react';

export default function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(mediaQuery.matches);

        // @ts-ignore
        const handler = (e) => {
            setIsDarkMode(e.matches);
        };
        mediaQuery.addEventListener('change', handler);

        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    return (
        <header className="flex items-center justify-center gap-8 py-4">
            <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                1
            </span>

            <div className="flex items-center justify-center">
                <img
                    alt="Main Logo"
                    src={isDarkMode ? '/logo/BonjourDark.svg' : '/logo/BonjourLight.svg'}
                />
            </div>

            <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                2
            </span>
        </header>

    );
}
