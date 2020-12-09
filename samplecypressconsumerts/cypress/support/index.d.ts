// type definitions for Cypress object "cy"
/// <reference types="cypress" />
declare namespace Cypress {
  interface Cypress {
    // Sample Cypress.env("testEnv") type definition to see if we can still create our own custom types here
    env(key: "testEnv"): "dev" | "staging" | "production" | undefined;
  }

  interface Chainable<Subject = any> {
    // Sample cy.login() custom command to see if we can still create our own custom types here
    login(username: string, password: string): Chainable<{ token: string }>;
  }
}
