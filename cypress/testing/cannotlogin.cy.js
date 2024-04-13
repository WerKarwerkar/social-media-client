describe("Login Validation", () => {
  it("Prevents login with incorrect credentials and shows an error message", () => {
    // Visit the login page
    cy.visit("https://weronikamartinsen.github.io/social-media-client/");

    // Open the login modal
    cy.get('button[data-auth="login"]').click();

    // Wait for the modal to open
    cy.wait(500);

    // Type incorrect credentials into the login form
    cy.get("#loginEmail").type("wrong@noroff.no");
    cy.get("#loginPassword").type("wrongpassword");

    // Submit the login form
    cy.get("#loginForm").find("button").contains("Login").click();

    // Check for an error message
    // The error message should be visible and contain the text "Email address or password are wrong."
    cy.get(".error-message")
      .should("be.visible")
      .and("contain", "Email address or password are wrong.");
  });
});
