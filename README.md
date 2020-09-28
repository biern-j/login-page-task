# login-page-task

This is Login page form: [https://login-page-task.netlify.app](https://login-page-task.netlify.app/)

You can access page in desktops, tablets (iPad vertical) and phones (>375px).

You can login via email and password. 

The validated password contain 8+ chars, 1 number, one upper letter.

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

Page is deployed by Netlify and is avaliable via link [https://login-page-task.netlify.app](https://login-page-task.netlify.app/)

## Project description

**Languages:** Application is build in **React** and **TypeScript**. For style was use js-in-css framework **Styled-components**.

**Web development:** Webpack

**Tests:** The e2e test for each test case was written in **Cypress**

**CI:** Continues integration was implemented via **github CI** where with each commit the application is built and tested by e2e testing.
