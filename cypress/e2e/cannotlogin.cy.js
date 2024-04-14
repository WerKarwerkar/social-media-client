describe("Login Validation", () => {
  it("Prevents login with incorrect credentials and shows an alert message", () => {
    cy.visit("/");
    cy.get('button[data-auth="login"]').first().click({ force: true });
    cy.get("#loginEmail").type("wrong@noroff.no", { force: true });
    cy.get("#loginPassword").type("wrongpassword", { force: true });
    cy.get("#loginForm")
      .find("button")
      .contains("Login")
      .click({ force: true });

    cy.on("window:alert", (alert) => {
      expect(alert).to.contain(
        "Either your username was not found or your password is incorrect",
      );
    });
  });
});
