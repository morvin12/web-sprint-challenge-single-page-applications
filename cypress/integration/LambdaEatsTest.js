describe('', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
    })

const nameInput = () => cy.get('input[name=name]');
const pepperoniBox = () => cy.get ('input[name=pepperoni]')
const onionsBox = () => cy.get ('input[name=onions]')
const olivesBox = () => cy.get ('input[name=olives]')
const artichokesBox = () => cy.get ('input[name=artichokes]')
const AddToOrderBtn = () => cy.get('button[type = submit]')

it('Make sure the elements show', () => {

    nameInput().should('exist');
    pepperoniBox().should('exist');
    onionsBox().should('exist');
    olivesBox().should('exist');
    artichokesBox().should('exist');
    AddToOrderBtn().should('exist');

})

it ('Inputs work?', () => {
    nameInput().should('have.value', '')
                .type('text')
                .should('have.value', 'text');
    
    pepperoniBox().should('not.be.disabled')
    onionsBox().should('not.be.disabled')
    olivesBox().should('not.be.disabled')
    artichokesBox().should('not.be.disabled')
    AddToOrderBtn().should('not.be.disabled')
                    
})


})