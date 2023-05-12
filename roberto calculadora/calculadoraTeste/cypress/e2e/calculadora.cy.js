///<reference types = 'cypress'/>


describe('Somar teste', () => {
  beforeEach(()=>{
    cy.visit('localhost:5500/index.html')
  })
  
  it('teste somar 10+7 ', () => {
   
    cy.get('#a').type('10')
    cy.get('#b').type('7')
    cy.get('select').select('adicao')
    cy.get('#igual').click()
    cy.get('#resultado').should('have.text', '17')
    cy.get('#delete').click()
  })
})

describe('divisao teste', () =>{
  beforeEach(()=>{
      cy.visit('localhost:5500/index.html')
  })

it('teste divisao 2/10', () => {

  cy.get('#a').type('2')
  cy.get('#b').type('10')
  cy.get('select').select('divisao')
  cy.get('#igual').click()
  cy.get('#resultado').should('have.text', '0.2')
  cy.get('#delete').click()
})
})// console.assert(adicao(10,7) == 17, "10 + 7 é 17")
// console.assert(adicao(4,0) == 4, "4 + 0 é 4")
// console.assert(adicao(1,1) == 2, "1 + 1 é 2")
// console.assert(adicao(0,3) == 3, "0 + 3 é 3")