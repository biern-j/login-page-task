describe("Login", () => {
  it("User should login successfully", () => {
    logInTest("successTest@gmail.com", "Success123");
    cy.get('[data-cy="welcome-title"]').contains("successTest@gmail.com");
  });
  it("User shouldn't login because unauthorized server response", () => {
    logInTest("invalidTest@gmail.com", "Invalid123");
    cy.get('[data-cy="unauthorized-message"]').contains(
      "Wrong email or password"
    );
  });
  it("User shouldn't login because unexpected server error", () => {
    logInTest("errorTest@gmail.com", "Error123");
    cy.get('[data-cy="unexpected-error-message"]').contains(
      "Oops! Unexpected error"
    );
  });
});

const logInTest = (userEmail: string, userPassword: string) => {
  cy.visit("http://0.0.0.0:8080");
  cy.get('[data-cy="email-input"]').type(userEmail);
  cy.get('[data-cy="password-input"]').type(userPassword);
  cy.get('[data-cy="submit-login"]').click();
};
