describe("Login Form", () => {
  it("User can login with valid credentials", () => {
    cy.visit("https://werkarwerkar.github.io/social-media-client/");

    cy.wait(1000);

    cy.get('button[data-auth="login"][data-bs-toggle="modal"]').click();

    cy.get("#loginEmail").type("stefaF1@noroff.no");
    cy.get("#loginPassword").type("stefaFirst1");

    cy.wait(1000);

    cy.get("#loginForm button").contains("Login").click();

    cy.wait(1000);

    cy.get("button").contains("Logout").should("be.visible");
  });
});
