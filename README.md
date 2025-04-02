# Investment Calculator Project

Welcome to the **Investment Calculator** project, a Next.js application that helps users calculate their investment results over a specified duration. This README will guide you through setting up the project, understanding the project structure, and deploying it on GitHub Pages.

## Quick Links

* [Production](https://project-domain.app/) 

 
## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Updating Package Versions](#updating-package-versions)
- [Learn more](#learn-mere)

## Introduction

The **Investment Calculator** is a Next.js application built using TypeScript, React, and Zod for validation. The app helps users calculate their investment results, considering factors like initial investment, annual contribution, expected return rate, and investment duration. 

The app is styled with CSS Modules and SASS, and follows best practices for building scalable, performant applications. It also uses `react-hook-form` for managing form state and validation, and `zod` for schema validation.

## Getting Started

### Node.js Version

This project requires Node.js version 16.4.5. Make sure you have Node.js installed, preferably using the LTS (Long Term Support) version. You can download Node.js from [the official website](https://nodejs.org/).

#### Changing Node.js Version

If you need to change the Node.js version for this project, you can use a version manager like [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm).

1. If you don't have nvm installed, follow the instructions in the [nvm repository](https://github.com/nvm-sh/nvm#install--update-script) to install it.

   Once installed, you can install and use Node.js version 16.4.5 with the following commands:

   ```bash
   nvm install 16.4.5
   nvm use 16.4.5

Ensure that you have the appropriate permissions to install global packages and switch Node.js versions on your system.

### First Setup

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>

2. Install dependencies:

   ```bash
   cd project-directory
   npm install

3. Run the development server:

   ```bash
   npm run dev

Open http://localhost:3000 to view the project in your browser.

###


## Project Structure

The project structure is organized as follows:

- app: Contains the pages of your Next.js application.
- components: Contains React components used on main page (e.g., InvestmentForm, InvestmentResultTable). 
- public: Contains static assets like images, fonts, and other files.
- utils: Contains utility functions, such as for calculating investment results and formatting currency.
- schemas: Contains the Zod schema for validating investment data.
- types: Contains the types of inputs and outputs
- tests: Contains tests for your application.

## Technologies Used

- Next.js for building SSR and statically generated web applications.
- TypeScript for type safety and better developer experience.
- Zod for schema-based validation of investment data.
- React Hook Form for form handling.
- SASS for styling.
- CSS Modules for component-specific styling.
- Intl API for formatting currency.

## Deployment

Deploys are automatically trigged on merges to main and during the pull request and review process. Merges to the main branch will be automatically deployed to the production environment.

## Updating Package Versions

As a developer, it's essential to keep package versions up-to-date to ensure compatibility and security. To update package versions:

1. Review the package.json file to identify outdated packages and their current versions.

2. Use the following command to check for outdated packages:

   ```bash
   npm outdated

3. To update a specific package to its latest version, use the following command:

   ```bash
   npm update <package-name>

Replace <package-name> with the name of the package you want to update.

4. After updating packages, ensure that the application still runs correctly by testing it locally.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!