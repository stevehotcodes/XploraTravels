///<reference types= "cypress"/>

describe('Explains the core features',()=>{
    it('uses the contain keyword',()=>{
        cy.visit("http://localhost:4200/signup")
        cy.get("h1").contains("Sign up");
        cy.get("#signupForm").find(".formgroup").children("input")
        cy.get("#signupForm").find(".formgroup").children("input")
        cy.get("#signupForm").find(".formgroup").children("input")
        cy.get("#signupForm").find(".formgroup").children("input")
        
    })
    it('uses registers a user',()=>{
        cy.visit("http://localhost:4200/signup")
        cy.get("h1").contains("Sign up");
        cy.get("#fullname").type("jonah ")
        cy.get("#email").type("jonahmtume1@gmail.com")
        cy.get("#password").type("12345678")
        cy.get("#confirmPassword").type("123445678")
        cy.get("button").contains("Sign up").click()
        
    })
    
    
})

