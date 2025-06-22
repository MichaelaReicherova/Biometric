# Prerequisites

Before running the tests, ensure that you have the following installed:
```bash
Node.js
Cypress
```

# Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/MichaelaReicherova/Biometric.git
    cd Biometric
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Run cypress in one of the following modes using one of the commands
    - a. Open Cypress in UI mode:
        ```bash
        npx cypress open
        # run with script
        npm run cy:open
        ```
    - b. Open Cypress in headless mode:
        ```bash
        npx cypress run
        # run with script
        npm run cy:run
        ```
