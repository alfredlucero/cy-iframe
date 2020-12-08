context("iframe custom command", () => {
  it("should be able to wait for iframe to load", () => {
    cy.visit("https://www.w3schools.com/html/html_iframe.asp");
    cy.iframe("iframe[title='W3Schools HTML Tutorial']");
  });

  it("should be able to chain iframe custom command and assert on elements", () => {});

  it("should be able to trigger events within the iframe", () => {});
});
