describe("When the user wants to see all the books", ()=>{

    before(()=>{
        cy.visit("https://librarya00347829.herokuapp.com/dashboard");
    })

    it("Then the books should be listed",()=>{

        cy.get('.ant-table-tbody')
        .find('.ant-table-cell')
        .should(($td) => {
           expect($td).length.to.be.greaterThan(0)
       })

    });
   
})