# InAction Fitness - Personal Training & Nutrition

A modern, responsive website for InAction Fitness, offering holistic personal training and nutrition coaching in Phoenix, AZ.

## Project info


The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Deployment

This project is automatically deployed to GitHub Pages. The site is available at: https://odphineguy.github.io/inaction/

### GitHub Pages Setup

1. **Repository Settings**: Go to your repository settings on GitHub
2. **Pages Section**: Navigate to "Pages" in the left sidebar
3. **Source**: Select "GitHub Actions" as the source
4. **Branch**: The deployment will happen automatically when you push to the `main` branch

### Local Development

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Manual Deployment

If you need to deploy manually:

1. Build the project: `npm run build`
2. The built files will be in the `dist/` directory
3. Upload the contents of `dist/` to your web server
