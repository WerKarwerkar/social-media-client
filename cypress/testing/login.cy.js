describe("Login Form", () => {
  it("User can login with valid credentials", () => {
    // Visit the website
    cy.visit("https://weronikamartinsen.github.io/social-media-client/");

    // Wait for the page to load
    cy.wait(500);

    // Open the login modal to identify the button
    cy.get('button[data-auth="login"][data-bs-toggle="modal"]').click();

    // Enter login credentials
    cy.get("#loginEmail").type("stefaF1@noroff.no");
    cy.get("#loginPassword").type("stefaFirst1");

    // Wait a moment to ensure all elements reloaded
    cy.wait(500);

    // Click the 'Login' button in the form
    cy.get("#loginForm button").contains("Login").click();

    // Check if the user is logged in by looking for the 'Logout' button
    cy.wait(1000); // Wait for the server response to be processed
    cy.get("button").contains("Logout").should("be.visible");
  });
});
