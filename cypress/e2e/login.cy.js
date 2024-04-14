describe("Login Form", () => {
  it("User can login with valid credentials", () => {
    cy.visit("https://werkarwerkar.github.io/social-media-client/");
    cy.get('button[data-auth="login"]').first().click();
    cy.get("#loginEmail").type("stefaF1@noroff.no");
    cy.get("#loginPassword").type("stefaFirst1");
    cy.get("#loginForm button").contains("Login").click();
    cy.get("button").contains("Logout").should("be.visible");
  });
});
