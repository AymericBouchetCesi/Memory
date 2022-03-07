describe('card', () => {
    // it('should show the good image',() => {
    //   cy.visit('http://127.0.0.1:5500/Memory/src/main/memory.html')
    //   cy.get('[id=row_1-col_0]').should("have.attr", "src").should('eql','images/dos.jpeg')
    //   cy.get('[id=row_1-col_0]').click().should("have.attr", "src").and('eql','images/image1.jpeg')
    
    // })
    // it('should be a pair',() => {
    //     const src = 'images/image1.jpeg'
    //     cy.visit('http://127.0.0.1:5500/Memory/src/main/memory.html')
    //     cy.get('[id=row_0-col_0]').click().should("have.attr", "src").and('eql', src)
    //     cy.get('[id=row_0-col_1]').click().should("have.attr", "src").and('eql', src)
    // })
    // it('should not be a pair',() => {
    //     const src = 'images/image1.jpeg'
    //     cy.visit('http://127.0.0.1:5500/Memory/src/main/memory.html')
    //     //cy.get('[id=row_0-col_0]').click().should("have.attr", "src", src)
    //     cy.get('[id=row_0-col_0]').click().should("have.attr", "src", 'images/dos.jpeg')
    //     cy.get('[id=row_0-col_0]').click().should("have.attr", "src", 'images/image1.jpeg')
    //     cy.get('[id=row_0-col_2]').click().should("not.have.attr", "src", src)
    // })
    it('1', ()=> {
        cy.visit('http://127.0.0.1:5500/Memory/src/main/memory.html')
        let card = cy.get('[id=row_0-col_0]')
        console.log(card)
        card.click().should("have.attr", "src", 'images/dos.jpeg')
    })
    it('2',()=> {
        cy.visit('http://127.0.0.1:5500/Memory/src/main/memory.html')
        cy.get('[id=row_0-col_0]').click().should("have.attr", "src", 'images/image1.jpeg')
    })
})