describe('API Testing with Auth', () => {
    it('Should fetch user data with Authorization header', () => {
      cy.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users/1',
        headers: {
          Authorization: 'Bearer your_token_here'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(1);
      });
    });
  });
  