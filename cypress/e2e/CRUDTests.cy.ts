
describe('API Testing - GET Request', () => {
  it('Should fetch a list of posts', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.greaterThan(0);
    });
  });
});


describe('API Testing - POST Request', () => {
  it('Should create a new post', () => {
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
      title: 'Cypress Test',
      body: 'This is a test post',
      userId: 1
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      expect(response.body.title).to.eq('Cypress Test');
    });
  });
});

describe('API Testing - PUT Request', () => {
  it('Should update an existing post', () => {
    cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
      id: 1,
      title: 'Updated Title',
      body: 'Updated body content',
      userId: 1
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq('Updated Title');
    });
  });
});

describe('API Testing - DELETE Request', () => {
  it('Should delete a post', () => {
    cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1').then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});



