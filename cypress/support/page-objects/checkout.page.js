class CheckoutPage{


    preencherEstado(estado) {
    cy.get('#select2-billing_state-container').click();
    cy.get('.select2-results__option')
    .should('be.visible')
    .contains(estado)
    .click();
    }


     preencherDadosCheckout(rua, cidade, cep, telefone) {
        cy.get('#billing_address_1').type(rua)
        cy.get('#billing_city').type(cidade)
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').type(telefone)
     
        
       
 
     }

}

export default new CheckoutPage()