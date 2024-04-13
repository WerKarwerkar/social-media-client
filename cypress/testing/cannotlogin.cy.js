describe("Login Validation", () => {
  it("Prevents login with incorrect credentials and shows an error message", () => {
    cy.visit("/");

    cy.get('button[data-auth="login"]').click();

    cy.wait(500);

    cy.get("#loginEmail").type("wrong@noroff.no");
    cy.get("#loginPassword").type("wrongpassword");

    cy.get("#loginForm").find("button").contains("Login").click();

    cy.get(".error-message")
      .should("be.visible")
      .and("contain", "Email address or password are wrong.");
  });
});
