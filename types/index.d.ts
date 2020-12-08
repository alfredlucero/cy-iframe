// type definitions for Cypress object "cy"
/// <reference types="cypress" />
declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      /**
       * Retrieve iframe's body content after it has loaded for us to chain like .find() after it
       * @example
       * cy.iframe(iframeSelector).find(<element>)
       */
      iframe(iframeSelector: string): Chainable<Subject>;
    }
  }
}

// Allows for us to set a global type for the cy.iframe command
export {};
