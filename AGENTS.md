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

-   **Deployment Process:** Follow these steps for deployment: (do not use a TODO list)
    1. Check current changes: `git status && git diff`
    2. Determine appropriate commit message based on changes
    3. Stage and commit changes (split into several commits via consecutive `git add ... && git commit ...` if necessary): `git add <ALL_NECESSARY_FILES_WITHOUT_JUNK> && git commit -m "message"`
    4. Update version: `npm version patch`
    5. Push with tags: `git push --follow-tags`
-   **Tagging Strategy:** Use semantic versioning for releases. The `npm version patch` command automatically increments the patch number and creates a git tag.
-   **Docker:** Uses docker-compose for containerized deployment.

## Development Environment

-   **Local Development:** opencode runs on the local development machine for code editing and testing.
-   **Remote Deployment:** Production deployments are executed via the release.yml GitHub Actions workflow on remote infrastructure.
-   **Log Context:** When logs are provided as input, they typically originate from the remote production environment rather than the local development setup.
