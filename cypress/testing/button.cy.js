describe("Logout", () => {
  it("Successfully logs in and then logs out", () => {
    // Visit the page
    cy.visit("https://weronikamartinsen.github.io/social-media-client/");

    // Click the login button to open the login modal
    cy.get('button[data-auth="login"]').click();

    // Wait for the modal to become visible
    cy.wait(500);

    // Type in the email and password
    cy.get("#loginEmail").type("stefaF1@noroff.no");
    cy.get("#loginPassword").type("stefaFirst1");

    // Submit the login form
    cy.get("#loginForm").find("button").contains("Login").click();

    // Wait for the login to be processed
    cy.wait(1000);

    // Click the logout button
    cy.get('button[data-auth="logout"]').click();

    // Check if the login button is visible again after the user has been logged out
    cy.get('button[data-auth="login"]').should("be.visible");
  });
});
