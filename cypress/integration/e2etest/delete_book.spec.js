const name_book = 'The Art of Computer Programming';

describe("When the user wants to delete a book", ()=>{

    before(()=>{

        cy.visit("https://librarya00347829.herokuapp.com/dashboard");
        cy.get('.ant-select-selector').click();
        cy.get('[title="50 / page"]').click();
    
    })

    it("Then the book should not be listed with the new name and author",()=>{

        cy.get("table").contains('tr', name_book).invoke("index").then((i) =>{
          
            cy.get(`:nth-child(${i+1}) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input`).check();
        })

        cy.get('[nztype="default"]').click();
        cy.get("table").contains('tr', name_book).should('not.exist');
   
    });

})