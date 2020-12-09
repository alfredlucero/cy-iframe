context("iframe custom command", () => {
  it("should be able to wait for iframe to load", () => {
    cy.visit("https://www.w3schools.com/html/html_iframe.asp");
    // Wait for body contents to load up within iframe
    cy.iframe("iframe[title='W3Schools HTML Tutorial']");
  });

  it("should be able to chain iframe custom command and assert on elements", () => {
    cy.visit("https://www.w3schools.com/html/html_iframe.asp");
    // Find HTML tab link in header within the iframe
    cy.iframe("iframe[title='W3Schools HTML Tutorial']")
      .find("a[title='HTML Tutorial']")
      .should("be.visible");
  });

  it("should be able to trigger events within the iframe", () => {
    cy.visit("https://www.w3schools.com/html/html_iframe.asp");
    // Within iframe, click CSS tab link and see CSS Tutorial landing page
    cy.iframe("iframe[title='W3Schools HTML Tutorial']").within(() => {
      cy.get("a[title='CSS Tutorial']").click();
    });
  });
});
