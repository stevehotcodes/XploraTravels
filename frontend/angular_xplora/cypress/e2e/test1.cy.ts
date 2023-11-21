describe('second test', () => {
    it('visit the landing page ', () => {
      cy.visit('http://localhost:4200/')

      cy.get("div");
      cy.get("button");
      cy.get("#welcome-wrapper")
      cy.get("div")
      cy.get("#login-signup-wrapper");
      
    })

  })


 