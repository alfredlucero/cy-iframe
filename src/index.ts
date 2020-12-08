import { iframe } from "./iframe";

const addCommands = () => {
  Cypress.Commands.add("iframe", iframe);
};

addCommands();
