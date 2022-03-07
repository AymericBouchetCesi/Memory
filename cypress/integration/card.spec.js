describe('card', () => {
    it('should show the good image',() => {
      cy.visit('http://127.0.0.1:5500/Memory/src/main/memory.html')
      cy.get('[id=row_1-col_0]').should("have.attr", "src").should('eql','images/dos.jpeg')
      cy.get('[id=row_1-col_0]').click().should("have.attr", "src").should('eql','images/image1.jpeg')
    
    })
})