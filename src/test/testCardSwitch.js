// import { describe } from "mocha";
import { createGrid } from "../main/grid.js";
import chai from 'chai'
const expect = chai.expect

describe("a memory grid",()=>{

    it("must contain cards",()=>{
        const types = {}
        const grid = createGrid(null)
        expect(grid).to.not.be.null
        expect(grid.length).to.eql(5)
        expect(grid[0].length).to.eql(4)

        for (const row of grid) {
            for (const card of row) {
                expect(card).to.not.be.null
                expect(card.visible).to.be.false
                expect(card.face).to.not.be.empty
                expect(card.face).to.eql('back')
                expect(card.type).to.not.be.empty
                let type = types[card.type]
                if(!type){
                    types[card.type] = 0
                    type = types[card.type]
                }
                types[card.type] += 1
            }
        }
        expect(Object.keys(types).length).to.eql(10)
        for(const [type,nb] of Object.entries(types)){
            expect(nb).to.eql(2)
        }

    })
})
