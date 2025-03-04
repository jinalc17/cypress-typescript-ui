/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    login(username: string, password: string): Chainable<void>;
    logout(): Chainable<void>;
    addItemToCart(itemName: string): Chainable<void>;
    removeItemFromCart(itemName: string): Chainable<void>;
  }
}


Cypress.Commands.add("login", (username: string, password: string) => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type(username); // Enter username
    cy.get('[data-test="password"]').type(password); // Enter password
    cy.get('[data-test="login-button"]').click(); // Click login button
  });
  
Cypress.Commands.add("logout", () => {
    cy.get("#react-burger-menu-btn").click(); // Open sidebar
    cy.get("#logout_sidebar_link").click(); // Click logout
  });

Cypress.Commands.add("addItemToCart", (itemName: string) => {
    cy.contains(itemName).parent().parent().find("button").click(); // Click Add to Cart button
  });

Cypress.Commands.add("removeItemFromCart", (itemName: string) => {
    cy.contains(itemName).parent().parent().find("button").click(); // Click Remove button
  });
  