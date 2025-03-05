
describe('JavaScript Alert Handling', () => {
    it('Should handle simple alert', () => {
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
      
      // Trigger the alert by clicking the button
      cy.contains('Click for JS Alert').click();
  
      // Handle the alert
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('I am a JS Alert');
      });
  
      // Optional: Confirm if the alert gets dismissed
      cy.get('#result').should('have.text', 'You successfully clicked an alert');
    });
  
    it('Should handle confirm alert', () => {
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
  
      // Trigger the confirm alert
      cy.contains('Click for JS Confirm').click();
  
      // Handle the confirm alert (clicking "OK")
      cy.on('window:confirm', (confirmText) => {
        expect(confirmText).to.equal('I am a JS Confirm');
        return true;  // Clicking "OK"
      });
  
      cy.get('#result').should('have.text', 'You clicked: Ok');
    });
  
    it('Should handle prompt alert', () => {
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
  
      // Trigger the prompt alert
      cy.contains('Click for JS Prompt').click();
  
      // Handle the prompt (typing a response)
    //   cy.window().then((win) => {
    //     cy.stub(win, 'prompt').returns('Cypress is awesome');
    //   });
  
      cy.on('window:prompt', (promptText) => {
        expect(promptText).to.equal('I am a JS prompt');
        return 'Cypress is awesome';  // Type in the prompt box
      });
  
      cy.get('#result').should('have.text', 'You entered: Cypress is awesome');
    });
  });
  