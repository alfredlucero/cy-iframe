/**
 * Cypress does not natively support iframes. Given the iframeSelector,
 * this will resolve with the iframe's wrapped body element when it's finished loading.
 * See https://github.com/cypress-io/cypress/issues/136
 * @param iframeSelector {string} iframe selector i.e. iframe#iframe-id
 * @returns {Chainable<Subject>} - returns iframe's wrapped body element to chain off of
 */
export const iframe = (iframeSelector: string) => {
  // Get the iframe > document > body
  // and retry until the body element is not empty and is loaded
  return (
    cy
      .get(iframeSelector)
      .its("0.contentDocument.body")
      .should("not.be.empty", { timeout: 15000 })
      // Wraps "body" DOM element to allow chaining more Cypress commands like ".find(...)"
      .then((body) => cy.wrap(body))
  );
};
