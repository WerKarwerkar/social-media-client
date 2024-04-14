describe("Login and Logout flow", () => {
  it("Successfully logs in and then logs out", () => {
    cy.visit("https://werkarwerkar.github.io/social-media-client/");

    cy.get('button[data-auth="login"]').first().click();

    cy.get("#loginEmail").type("stefaF1@noroff.no");

    cy.get("#loginPassword").type("stefaFirst1");

    cy.get("#loginForm button").contains("Login").click();

    cy.get("button").contains("Logout").should("be.visible");

    cy.get('button[data-auth="logout"]').should("be.visible");
    cy.get('button[data-auth="logout"]').click();

    cy.get(
      'button[data-bs-toggle="modal"][data-bs-target="#loginModal"]',
    ).should("be.visible");
  });
});
