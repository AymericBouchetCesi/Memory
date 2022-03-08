describe('card', () => {
    const image1 = 'images/image1.jpeg'
    const dos = 'images/dos.jpeg'
    it('should show the good image',() => {
      cy.visit('http://127.0.0.1:5500/Memory/src/main/memory.html')
      cy.get('[id=row_1-col_0]').should("have.attr", "src", dos)
      cy.get('[id=row_1-col_0]').click().should("have.attr", "src", image1)
    
    })
    it('should stay face until a second card flip', ()=>{
        cy.get('[id=row_0-col_0]').click()
        cy.wait(5000)
        cy.get('[id=row_0-col_0]').should("have.attr", "src", image1)
    })
    it('should be a pair',() => {
        cy.visit('http://127.0.0.1:5500/Memory/src/main/memory.html')

        //click on the first image
        cy.get('[id=row_0-col_0]').click()
        cy.wait(5000)
        cy.get('[id=row_0-col_0]').should("have.attr", "src", image1)

        //click on the second image
        cy.get('[id=row_0-col_1]').click()
        cy.wait(5000)
        cy.get('[id=row_0-col_1]').should("have.attr", "src", image1)
    })
    it('should not be a pair',() => {
        cy.visit('http://127.0.0.1:5500/Memory/src/main/memory.html')
        
        //click on the first image
        cy.get('[id=row_0-col_0]').click()
        cy.wait(5000)
        cy.get('[id=row_0-col_0]').should("have.attr", "src", image1)

        //click on the second image
        cy.get('[id=row_0-col_2]').click()
        cy.wait(5000)
        cy.get('[id=row_0-col_2]').should("have.attr", "src", dos)
        cy.get('[id=row_0-col_0]').should("have.attr", "src", dos)
    })
    // it('1', ()=> {
    //     cy.visit('http://127.0.0.1:5500/Memory/src/main/memory.html')
    //     cy.get('[id=row_0-col_0]').click()
    //     cy.wait(5000)
    //     cy.get('[id=row_0-col_0]').should("have.attr", "src", dos)
    // })
    // it('2',()=> {
    //     cy.visit('http://127.0.0.1:5500/Memory/src/main/memory.html')
    //     cy.get('[id=row_0-col_0]').click().should("have.attr", "src", image1)
    // })
    // it('3',()=> {
    //     cy.visit('http://127.0.0.1:5500/Memory/src/main/memory.html')
    //     cy.get('[id=row_0-col_0]').click().should("have.attr", "src", image1).should("have.attr", "src", dos)
    // })
    // it('4',()=> {
    //     cy.visit('http://127.0.0.1:5500/Memory/src/main/memory.html')
    //     cy.get('[id=row_0-col_0]').click().should("have.attr", "src", dos).should("have.attr", "src", image1)
    // })
})