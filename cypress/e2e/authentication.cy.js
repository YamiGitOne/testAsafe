describe('Google Authentication', () => {
    it('should successfully sign in with Google', () => {
      // Visitar la página de inicio de sesión
      cy.visit('/auth/signin')
  
      // Interceptar la solicitud de autenticación a NextAuth
      cy.intercept('POST', '**/api/auth/signin/google').as('googleSignIn')
  
      // Simular el clic en el botón de inicio de sesión de Google
      cy.contains('Sign in with Google').click()
  
      // Esperar a que la solicitud a la API de Google se realice
      cy.wait('@googleSignIn')
  
      // Redirigir manualmente a la página deseada después de la autenticación
      cy.visit('/')
  

      cy.url().should('eq', `${Cypress.config().baseUrl}/`)
  

      cy.get('header').should('contain', 'Welcome') 
    })
  })
  