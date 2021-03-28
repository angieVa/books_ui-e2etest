const name_book = 'Programming Pearls';
const name_add = ' II';
const name_author = 'Jon Bentley';
const author_add = ' Collins'

describe("When the user wants to edit a book", ()=>{

    before(()=>{

        cy.visit("https://librarya00347829.herokuapp.com/dashboard");
        cy.get('.ant-select-selector').click();
        cy.get('[title="50 / page"]').click();

    })

    it("Then the book should be listed with the new name and author",()=>{

        cy.get("table").contains('tr', name_book).invoke("index").then((i) =>{
          
            cy.get(`:nth-child(${i+1}) > .ant-table-cell > button.ant-btn.ant-btn-primary.ant-btn-circle.ant-btn-icon-only`).click();
        })

        cy.get('#name').click().type(name_add);
        cy.get('#author').click().type(author_add);
        cy.get('.ant-modal-footer > .ant-btn-primary').click()

        cy.get('tbody.ant-table-tbody.ng-star-inserted').contains('td', name_book + name_add).should('be.visible');
        cy.get('tbody.ant-table-tbody.ng-star-inserted').contains('td', name_author + author_add).should('be.visible');
        
    });

})