describe("SauceDemo Custom Commands", () => {
    beforeEach(() => {
      cy.login("standard_user", "secret_sauce"); 
    });
  
    it("Should add an item to cart", () => {
      cy.addItemToCart("Sauce Labs Backpack"); 
      cy.get(".shopping_cart_badge").should("contain", "1"); 
    });
  
    it("Should remove an item from cart", () => {
      cy.addItemToCart("Sauce Labs Backpack");
      cy.removeItemFromCart("Sauce Labs Backpack"); 
      cy.get(".shopping_cart_badge").should("not.exist"); 
    });
  
    it("Should log out successfully", () => {
      cy.logout(); 
      cy.get('[data-test="login-button"]').should("be.visible"); 
    });
  });
  