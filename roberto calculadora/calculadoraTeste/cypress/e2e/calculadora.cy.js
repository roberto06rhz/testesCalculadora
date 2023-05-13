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

  it('teste somar 4+0 ', () => {
   
    cy.get('#a').type('4')
    cy.get('#b').type('0')
    cy.get('select').select('adicao')
    cy.get('#igual').click()
    cy.get('#resultado').should('have.text', '4')
    cy.get('#delete').click()
  })

  it('teste somar 1+1 ', () => {
   
    cy.get('#a').type('1')
    cy.get('#b').type('1')
    cy.get('select').select('adicao')
    cy.get('#igual').click()
    cy.get('#resultado').should('have.text', '1')
    cy.get('#delete').click()
  })

  it('teste somar 0+3 ', () => {
   
    cy.get('#a').type('0')
    cy.get('#b').type('3')
    cy.get('select').select('adicao')
    cy.get('#igual').click()
    cy.get('#resultado').should('have.text', '-3')
    cy.get('#delete').click()
  })
})


describe('subtracao teste', () =>{
  beforeEach(()=>{
      cy.visit('localhost:5500/index.html')
  })

it('teste subtracao 4-3', () => {

  cy.get('#a').type('4')
  cy.get('#b').type('3')
  cy.get('select').select('subtracao')
  cy.get('#igual').click()
  cy.get('#resultado').should('have.text', '-1')
  cy.get('#delete').click()
})

it('teste subtracao 7-5', () => {

  cy.get('#a').type('7')
  cy.get('#b').type('5')
  cy.get('select').select('subtracao')
  cy.get('#igual').click()
  cy.get('#resultado').should('have.text', '2')
  cy.get('#delete').click()
})

it('teste subtracao 5-0', () => {

  cy.get('#a').type('5')
  cy.get('#b').type('0')
  cy.get('select').select('subtracao')
  cy.get('#igual').click()
  cy.get('#resultado').should('have.text', '5')
  cy.get('#delete').click()
})

it('teste subtracao 0-4', () => {

  cy.get('#a').type('0')
  cy.get('#b').type('4')
  cy.get('select').select('subtracao')
  cy.get('#igual').click()
  cy.get('#resultado').should('have.text', '-4')
  cy.get('#delete').click()
})

it('teste subtracao 0-0', () => {

  cy.get('#a').type('0')
  cy.get('#b').type('0')
  cy.get('select').select('subtracao')
  cy.get('#igual').click()
  cy.get('#resultado').should('have.text', '0')
  cy.get('#delete').click()
})

it('teste subtracao 0-3', () => {

  cy.get('#a').type('0')
  cy.get('#b').type('3')
  cy.get('select').select('subtracao')
  cy.get('#igual').click()
  cy.get('#resultado').should('have.text', '3')
  cy.get('#delete').click()
})

it('teste subtracao -3-0', () => {

  cy.get('#a').type('-3')
  cy.get('#b').type('0')
  cy.get('select').select('subtracao')
  cy.get('#igual').click()
  cy.get('#resultado').should('have.text', '-3')
  cy.get('#delete').click()
})

})

describe('multlipicacacao teste', () =>{
  beforeEach(()=>{
      cy.visit('localhost:5500/index.html')
  })

it('teste divisao 6x7', () => {

  cy.get('#a').type('6')
  cy.get('#b').type('7')
  cy.get('select').select('multiplicacao')
  cy.get('#igual').click()
  cy.get('#resultado').should('have.text', '42')
  cy.get('#delete').click()
})

it('teste divisao 4x0', () => {

  cy.get('#a').type('4')
  cy.get('#b').type('0')
  cy.get('select').select('multiplicacao')
  cy.get('#igual').click()
  cy.get('#resultado').should('have.text', '0')
  cy.get('#delete').click()
})

it('teste divisao 0x0', () => {

  cy.get('#a').type('0')
  cy.get('#b').type('0')
  cy.get('select').select('multiplicacao')
  cy.get('#igual').click()
  cy.get('#resultado').should('have.text', '0')
  cy.get('#delete').click()
})

it('teste divisao 1x-3', () => {

  cy.get('#a').type('1')
  cy.get('#b').type('-3')
  cy.get('select').select('multiplicacao')
  cy.get('#igual').click()
  cy.get('#resultado').should('have.text', '-3')
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

it('teste divisao 20/2', () => {

  cy.get('#a').type('20')
  cy.get('#b').type('2')
  cy.get('select').select('divisao')
  cy.get('#igual').click()
  cy.get('#resultado').should('have.text', '10')
  cy.get('#delete').click()
})

it('teste divisao 2/10', () => {

  cy.get('#a').type('4')
  cy.get('#b').type('0')
  cy.get('select').select('divisao')
  cy.get('#igual').click()
  cy.get('#resultado').should('have.text', 'não foi possível dividir por 0')
  cy.get('#delete').click()
})

it('teste divisao 0/4', () => {

  cy.get('#a').type('0')
  cy.get('#b').type('4')
  cy.get('select').select('divisao')
  cy.get('#igual').click()
  cy.get('#resultado').should('have.text', '0')
  cy.get('#delete').click()
})

it('teste divisao 400/500', () => {

  cy.get('#a').type('400')
  cy.get('#b').type('500')
  cy.get('select').select('divisao')
  cy.get('#igual').click()
  cy.get('#resultado').should('have.text', '0.8')
  cy.get('#delete').click()
})

it('teste divisao 500/400', () => {

  cy.get('#a').type('500')
  cy.get('#b').type('400')
  cy.get('select').select('divisao')
  cy.get('#igual').click()
  cy.get('#resultado').should('have.text', '1.25')
  cy.get('#delete').click()
})
})