/** @type {import('prettier').Config} */
export default {
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    tabWidth: 4,

    plugins: [
        'prettier-plugin-astro',
        'prettier-plugin-jsdoc',
        'prettier-plugin-organize-imports',
        'prettier-plugin-tailwindcss',
    ],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
};
