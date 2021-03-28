const name_book = 'Algorithms II';
const author_book = "Arnold B"
describe("When the user wants to add a book", ()=>{

    before(()=>{

        cy.visit("https://librarya00347829.herokuapp.com/dashboard");
        cy.get('.ant-select-selector').click();
        cy.get('[title="50 / page"]').click();

    })

    it("Then the book should be listed with the right name and author",()=>{

        cy.get('.ant-btn-primary > .ng-star-inserted').click();
        cy.get('#name').click().type(name_book);
        cy.get('#author').click().type(author_book);
        cy.get('.ant-modal-footer > .ant-btn-primary').click();

        cy.get('tbody.ant-table-tbody.ng-star-inserted').contains('td', name_book).should('be.visible');
        cy.get('tbody.ant-table-tbody.ng-star-inserted').contains('td', author_book).should('be.visible');
        
    });

})
