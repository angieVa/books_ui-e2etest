const name_book = 'Algorithms III';
const author_book = "Arnold B. O."
describe("When the user wants to add a book without the author", ()=>{

    before(()=>{

        cy.visit("https://librarya00347829.herokuapp.com/dashboard");
        cy.get('.ant-select-selector').click();
        cy.get('[title="50 / page"]').click();

    })

    it("Then the book should not be listed",()=>{

        cy.get('.ant-btn-primary > .ng-star-inserted').click();
        cy.get('#name').click().type(name_book);
        cy.get('.ant-modal-footer > .ant-btn-primary').should('be.disabled');
        cy.get('.ant-modal-footer > [nztype="default"]').click();
        cy.get('tbody.ant-table-tbody.ng-star-inserted').contains('td', name_book).should('not.exist');
        
    });

})

describe("When the user wants to add a book without the name of the book", ()=>{

    before(()=>{

        cy.visit("https://librarya00347829.herokuapp.com/dashboard");
        cy.get('.ant-select-selector').click();
        cy.get('[title="50 / page"]').click();

    })

    it("Then the book should not be listed",()=>{

        cy.get('.ant-btn-primary > .ng-star-inserted').click();
        cy.get('#author').click().type(author_book);
        cy.get('.ant-modal-footer > .ant-btn-primary').should('be.disabled');
        cy.get('.ant-modal-footer > [nztype="default"]').click();

        cy.get('tbody.ant-table-tbody.ng-star-inserted').contains('td', author_book).should('not.exist');
        
    });

})