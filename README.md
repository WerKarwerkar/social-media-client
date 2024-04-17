
# Social Media Client - Workflow CA Configuration Guide 

Welcome to the Social Media Client - Workflow project! This README is crafted to provide you with a detailed walkthrough for establishing our development environment. 
It outlines the critical tools and best practices that underpin our commitment to maintaining exceptional code quality and promoting an environment of efficient collaboration.

## Requirements for the ca



### Step 1: Fork and Branch

- Fork the project repository to your GitHub account to create your personal workspace.
- Clone your forked repository, and then create a new branch named `workflow` to house your enhancements.

### Step 2: Code Quality Tools

- Integrate **ESLint** and **Prettier** into your project for linting and auto-formatting. This ensures your codebase remains clean and readable.
- Incorporate commit hooks using **Husky** to automatically lint your code before each commit, ensuring only quality code makes it to your repository.

### Step 3: Automation with GitHub Actions

- Set up **GitHub Actions** for continuous integration, enabling automatic builds and deployments. This ensures your application is always in a deployable state.

### Step 4: Bug Tracking

- Utilize the **GitHub Issues** tab to track any bugs encountered during development. A well-documented issue can be a valuable tool for resolution.

### Step 5: Testing

- Configure your project with **Jest** for unit testing and **Cypress** for end-to-end testing. Robust testing is the backbone of reliable software.
- Develop tests covering the required test cases to ensure your application behaves as expected.

### Step 6: Peer Review

- Once your `workflow` branch is ready, open a Pull Request against the main branch. Request a peer review to gather feedback and further refine your work.

### Step 7: Finalize and Share

- Implement feedback from your peers, make the final tweaks, and ensure your pull request passes all checks.
- Submit your pull request link on Moodle for assessment.

https://werkarwerkar.github.io/social-media-client/

## Local Setup

# Prerequisites

Please make sure that you have Node.js installed on your system.

# Installation

1. Clone this repository:
git clone https://github.com/WerKarwerkar/social-media-client/tree/workflow

2. Navigate to the project directory:
cd Workflow

3. Install dependencies:
npm install

4. Start the application:
npm start

## Testing

To run Jest and Cypress tests, use the following command:

npm run test

## Testing Files

The files including both unit-tests and e2e-tests can be found on the following paths:

e2e-tests: cypress\e2e\

unit-tests: src\js\api\auth\

## Test Badges

[![Automated E2E Testing](https://github.com/WerKarwerkar/social-media-client/actions/workflows/e2e-test.yml/badge.svg?branch=workflow)](https://github.com/WerKarwerkar/social-media-client/actions/workflows/e2e-test.yml)



[![Automated Unit Testing](https://github.com/WerKarwerkar/social-media-client/actions/workflows/automated-test.yml.yml/badge.svg?branch=workflow)](https://github.com/WerKarwerkar/social-media-client/actions/workflows/automated-test.yml.yml)



[![Deploy static content to Pages](https://github.com/WerKarwerkar/social-media-client/actions/workflows/pages.yml/badge.svg?branch=workflow)](https://github.com/WerKarwerkar/social-media-client/actions/workflows/pages.yml)



[![pages-build-deployment](https://github.com/WerKarwerkar/social-media-client/actions/workflows/pages/pages-build-deployment/badge.svg?branch=workflow)](https://github.com/WerKarwerkar/social-media-client/actions/workflows/pages/pages-build-deployment)










