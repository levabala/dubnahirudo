import { THEME_DEFAULT, isTheme } from '../constants/theme';

let theme = THEME_DEFAULT;
if (localStorage.getItem('theme') !== null) {
    const themeSaved = localStorage.getItem('theme');
    if (themeSaved && isTheme(themeSaved)) {
        theme = themeSaved;
    }
}

function getIsDarkMode(theme: string) {
    return theme === 'halloween';
}

function setColorMode(isDark: boolean) {
    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'halloween');
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'halloween');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
}

setColorMode(getIsDarkMode(theme));

document.addEventListener('alpine:init', () => {
    console.log('init darkMode store');
    Alpine.store('darkMode', {
        on: theme === 'halloween',
        toggle() {
            // @ts-expect-error -- WTF
            this.on = !this.on;
            // @ts-expect-error -- WTF
            setColorMode(this.on);
        },
    });
});
