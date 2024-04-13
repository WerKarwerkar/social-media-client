describe("Logout", () => {
  it("Successfully logs in and then logs out", () => {
    cy.visit("/");

    cy.get('button[data-auth="login"]').click();

    cy.wait(500);

    cy.get("#loginEmail").type("stefaF1@noroff.no");
    cy.get("#loginPassword").type("stefaFirst1");

    cy.get("#loginForm").find("button").contains("Login").click();

    cy.wait(1000);

    cy.get('button[data-auth="logout"]').click();

    cy.get('button[data-auth="login"]').should("be.visible");
  });
});
