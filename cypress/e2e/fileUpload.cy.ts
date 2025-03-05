import 'cypress-file-upload';


describe('File Upload Handling', () => {
    it('Should upload a file', () => {
      cy.visit('https://www.fileconvoy.com/');
  
      // Provide the file path
      const filePath = 'dummyfile.pdf'; 
  
      // Attach the file
      cy.get('#upfile_0').attachFile(filePath); 
  
      // Check if the file is uploaded successfully
      cy.get('#upfile_0').should('have.value', 'C:\\fakepath\\dummyfile.pdf');
    });
  });
  