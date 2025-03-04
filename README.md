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

You're now ready to write and execute your first Cypress TypeScript test script!

# Cypress Selectors

Selectors are used to locate elements in the DOM. Cypress provides different ways to select elements.

## **Basic Selectors**

### **By Tag Name**
```js
cy.get('button')  // Selects all `<button>` elements
```

### **By Class Name**
```js
cy.get('.btn-primary')  // Selects elements with class "btn-primary"
```

### **By ID**
```js
cy.get('#login-button')  // Selects element with ID "login-button"
```

### **By Attribute**
```js
cy.get('[data-test="username"]')  // Selects element with the attribute data-test="username"
```

## **Advanced Selectors**

### **By Contains Text (Text-Based Selector)**
```js
cy.contains('Login')  // Finds an element containing text "Login"
```
```js
cy.contains('button', 'Submit')  // Finds a <button> with text "Submit"
```

### **By Child Element**
```js
cy.get('.form-group').find('input')  // Finds `<input>` inside `.form-group`
```

### **By Parent Element**
```js
cy.get('input[name="email"]').parent()  // Selects parent of an input field
```

### **By Sibling Elements**
```js
cy.get('.menu-item').next()  // Selects next sibling element
cy.get('.menu-item').prev()  // Selects previous sibling element
```

### **Using .first() and .last()**
```js
cy.get('.list-item').first()  // Selects the first element in a list
cy.get('.list-item').last()  // Selects the last element in a list
```

### **Using .eq(index) (Selecting a Specific Element from a List)**
```js
cy.get('.list-item').eq(2)  // Selects the third list item (index starts from 0)
```

## **XPath Selectors (Using Plugin)**
Cypress doesn't support XPath by default, but you can install a plugin:
```sh
npm install cypress-xpath
```

Then, add this line to `cypress/support/e2e.ts`:
```js
import 'cypress-xpath';
```

Now, you can use XPath:
```js
cy.xpath('//button[text()="Login"]').click();
cy.xpath('//input[@type="text"]').type('Hello');
```
