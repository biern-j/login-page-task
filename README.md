# login-page-task

This is Login page form: [login-page-task](https://login-page-task.netlify.app/)

You can access page in desktops, tablets (iPad vertical) and phones (>375px).

You can login via email and password. 

The validated password contains 8+ chars, 1 number, one upper letter.

## Testing cases

**Steps to Success login:**

- Enter a valid email address
- Enter a valid password. Fx. Success123

**Steps to invalid login when user is unauthorized:**

- Enter a valid email addres
- Enter **Invalid123** as a password

**Steps to failure logon when an unexpected server error occurs**

- Enter a valid address
- Enter **Error123** as a password

## Project deployment

Page is deployed by Netlify and is avaliable via link [login-page-task](https://login-page-task.netlify.app/)

## Project description

**Technologies:** Application is build in **React**, **TypeScript**, **Webpack** and **Styled-components**.

**Tests:** The e2e test for each test scenario was written in **Cypress**.

**CI:** Continuous integration was implemented via **github CI** where with each commit the application is built and e2e tested with cypress.

## ToDo
* Optimize bundle size.
* Add unit tests for input validation functions.
