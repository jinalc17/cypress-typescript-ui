# Cypress TypeScript Project

## What is Cypress?
Cypress is a testing tool designed for applications running within a browser. It supports different types of tests, including component, end-to-end, and API tests. Unlike Selenium or Playwright, Cypress works directly within the browser by creating two iframes—one for the application and one for the Cypress script—eliminating the need for a middleware or a web driver. While primarily built for developers, its simplicity has made it popular among testers as well. However, its main purpose remains testing, rather than automating the browser itself.

## Setting Up a Cypress TypeScript Project

### 1. Initialize an npm Project
```sh
# Create a project folder
mkdir cypress-typescript-ui

# Navigate into it
cd cypress-typescript-ui

# Initialize npm (creates a package.json file)
npm init -y
```

### 2. Set Up Cypress
```sh
# Install Cypress as a dev dependency
npm install cypress --save-dev

# Open Cypress
npx cypress open
```

### 3. Configure TypeScript
```sh
# Install TypeScript as a dev dependency
npm install typescript --save-dev

# Initialize TypeScript configuration
npx tsc --init
```

#### Update `tsconfig.json` with the following:
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress", "node"]
  },
  "include": ["**/*.ts"]
}
```
Restart the IDE’s TypeScript server if needed.

### 4. Create Your First Cypress TypeScript Script
```sh
# Open Cypress
npx cypress open
```
- Choose **E2E Testing**
- Select a browser (e.g., Chrome) and start testing.

You're now ready to write and execute your first Cypress TypeScript test script! 🚀

