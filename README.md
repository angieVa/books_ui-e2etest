# books-ui-e2e-test

This repository contains the e2e test UI deploy on: https://librarya00347829.herokuapp.com/dashboard

To run the test cases locally execute:
```
npm i
npm run test:e2e:ui:headless
```

The following test cases are located at cypress/integration/e2etest/**:

- list-book.spec.js
  - Test when the user wants to list all the books.
  - Asserts that there is at least one book listed.
 
- register-book.spec.js
  - Test that the user clicked in Add button.
  - The user types the name and the author of the book and click in save button.
  - Asserts that in the page is a book with that name and author.
 
- not-register-book.spec.js
  - Test when the user wants to add a new book without a field.
  - Test that the user clicked in Add button.
  - The user types the name of the book and the save button is disabled.
  - Asserts that the book was not added.
 
- edit-book.spec.js
  - Test when the user wants to edit an existing book.
  - Test that the user clik in the edit button of a book.
  - The user types the new name and author of the book and click in the save button.
  - Asserts that in the page is a book with the new name and author.
 
- not-edit-book.spec.js
  - Test when the user wants to edit an existing book without the name or the author.
  - Test that the user clik in the edit button of a book.
  - The user types the new name of the book but clears the author field and the save button is disabled.
  - Asserts that in the page there is not a book with the new name.

- delete-book.spec.js
  - Test when the user wants to delete an existing book
  - Test that the user check the book that want to delete and click the delete button
  - Asserts that in the page there is not a book with that name.
