## Build, Lint, and Test Commands

This project uses Bun as the package manager.

-   **Build:** `bun run build`
-   **Dev Server:** `bun run dev`
-   **Lint:** `bun run prettier --check .`
-   **Format:** `bun run prettier --write .`
-   **Type Check:** `bun tsc`

## Code Style Guidelines

-   **Commit Messages:** Read the last 10 commit messages to match the format and style.
-   **Framework:** Astro
-   **UI:** Tailwind CSS with daisyUI
-   **Formatting:** Prettier with default settings. Imports are organized by `prettier-plugin-organize-imports`.
-   **Types:** Use TypeScript. Strictest settings are enabled in `tsconfig.json`.
-   **Naming Conventions:** Use camelCase for variables and functions. Use PascalCase for components.
-   **Error Handling:** Use try/catch blocks for asynchronous operations.

## Deployment and Versioning

-   **Tagging Strategy:** Use semantic versioning (v0.1.x) for releases. Create git tags to trigger automated deployment via GitHub Actions.
-   **Deployment:** Push tags with `git push origin main --tags` to trigger the release workflow that deploys to production server.
-   **Docker:** Uses docker-compose with nginx + certbot for SSL-enabled deployment to www.dubna-hirudo.ru.
