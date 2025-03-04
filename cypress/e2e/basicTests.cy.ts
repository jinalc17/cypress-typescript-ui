describe("Basic Cypress Test", () => {
  it("Visits the Cypress Example Page", () => {
    cy.visit("https://example.cypress.io"); 
    cy.contains("Kitchen Sink").should("be.visible"); 
  });
});

describe("Input Field Test", () => {
  it("Types into an input field", () => {
    cy.visit("https://example.cypress.io/commands/actions");
    
    cy.get(".action-email") 
      .type("test@example.com") 
    cy.get('.action-email').should("have.value", "test@example.com"); 
  });
});

describe("Button Click Test", () => {
  it("Clicks a button", () => {
    cy.visit("https://example.cypress.io/commands/actions");
    
    cy.get(".action-btn") 
      .click(); 
    cy.contains("This popover shows up on click")
      .should("be.visible"); 
  });
});

describe("Double Click Test", () => {
  it("Double clicks a button", () => {
    cy.visit("https://example.cypress.io/commands/actions");    
    cy.get('.action-div').dblclick()
    cy.get('.action-div').should('not.be.visible')
    cy.get('.action-input-hidden').should('be.visible')
  });
});

describe("Checkbox Test", () => {
  it("Checks and unchecks a checkbox", () => {
    cy.visit("https://example.cypress.io/commands/actions");
    
    cy.get(".action-checkboxes [type='checkbox']").first() 
      .check()
      .should("be.checked"); 
    
    cy.get(".action-checkboxes [type='checkbox']").first() 
      .uncheck() 
      .should("not.be.checked"); 
  });
});

describe("Dropdown Test", () => {
  it("Selects an option from a dropdown", () => {
    cy.visit("https://example.cypress.io/commands/actions");
    
    cy.get('.action-select-multiple > [value="fr-apples"]') 
      .should("have.value", "fr-apples"); 
  });
});

describe("Form Submission Test", () => {
  it("Fills and submits a form", () => {
    cy.visit("https://example.cypress.io/commands/actions");
    
    cy.get('.action-form')
  .find('[type="text"]').type('HALFOFF')
      
    cy.get('.action-form').submit()
    cy.get('.action-form').next().should('contain', 'Your form has been submitted!')
    

  });
});

