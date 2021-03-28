const name_book = 'CODE: The Hidden Language of Computer Hardware and Software';
const name_add = ' II';
const name_author = 'Charles Petzold';
const author_add = ' Collins'

describe("When the user wants to edit a book by deleting the name", ()=>{

    before(()=>{

        cy.visit("https://librarya00347829.herokuapp.com/dashboard");
        cy.get('.ant-select-selector').click();
        cy.get('[title="50 / page"]').click();

    })

    it("Then the book should not be listed with the new name",()=>{

        cy.get("table").contains('tr', name_book).invoke("index").then((i) =>{
          
            cy.get(`:nth-child(${i+1}) > .ant-table-cell > button.ant-btn.ant-btn-primary.ant-btn-circle.ant-btn-icon-only`).click();
        })

        cy.get('#name').click().clear();
        cy.get('#author').click().type(author_add);
        cy.get('.ant-modal-footer > .ant-btn-primary').should('be.disabled');
        cy.get('.ant-modal-footer > [nztype="default"]').click();

        cy.get('tbody.ant-table-tbody.ng-star-inserted').contains('td', name_author + author_add).should('not.exist');
        
    });

})

describe("When the user wants to edit a book by deleting the author", ()=>{

    before(()=>{

        cy.visit("https://librarya00347829.herokuapp.com/dashboard");
        cy.get('.ant-select-selector').click();
        cy.get('[title="50 / page"]').click();

    })

    it("Then the book should not be listed with the new author",()=>{

        cy.get("table").contains('tr', name_book).invoke("index").then((i) =>{
          
            cy.get(`:nth-child(${i+1}) > .ant-table-cell > button.ant-btn.ant-btn-primary.ant-btn-circle.ant-btn-icon-only`).click();
        })

        cy.get('#name').click().type(name_add);
        cy.get('#author').click().clear();
        cy.get('.ant-modal-footer > .ant-btn-primary').should('be.disabled');
        cy.get('.ant-modal-footer > [nztype="default"]').click();

        cy.get('tbody.ant-table-tbody.ng-star-inserted').contains('td', name_book + name_add).should('not.exist');
        
    });

})