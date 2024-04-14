describe("Login Validation", () => {
  it("Prevents login with incorrect credentials and shows an error message", () => {
    cy.visit("https://werkarwerkar.github.io/social-media-client/");
    cy.wait(1000);

    cy.get('button[data-auth="login"]').click();
    cy.wait(500);

    cy.get("#loginEmail").type("wrong@noroff.no");
    cy.get("#loginPassword").type("wrongpassword");
    cy.get("#loginForm").find("button").contains("Login").click();

    cy.on("window:alert", (str) => {
      expect(str).to.contains("Email address or password are wrong.");
    });
  });
});
