import Loggable = Cypress.Loggable;
import Timeoutable = Cypress.Timeoutable;

interface AdditionalOptions {
  body?: Partial<Loggable & Timeoutable>
}

/**
 * Cypress does not natively support iframes. Given the iframeSelector,
 * this will resolve with the iframe's wrapped body element when it's finished loading.
 * See https://github.com/cypress-io/cypress/issues/136
 * @param iframeSelector {string} iframe selector i.e. iframe#iframe-id
 * @param options {Partial<Loggable & Timeoutable>} command options
 * @param additionalOptions {AdditionalOptions} additional options for chained commands
 * @returns {Chainable<Subject>} - returns iframe's wrapped body element to chain off of
 */
export const iframe = (iframeSelector: string, options?: Partial<Loggable & Timeoutable>, additionalOptions?: AdditionalOptions) => {
  // Get the iframe > document > body
  // and retry until the body element is not empty and is loaded
  const bodyOptions = { timeout: DEFAULT_BODY_TIMEOUT, ...((additionalOptions && additionalOptions.body) || {}) };
  return (
      cy
          .get(iframeSelector, options)
          .its("0.contentDocument.body")
          .should("not.be.empty", bodyOptions)
          // Wraps "body" DOM element to allow chaining more Cypress commands like ".find(...)"
          .then((body) => cy.wrap(body))
  );
};

const DEFAULT_BODY_TIMEOUT = 10000;
