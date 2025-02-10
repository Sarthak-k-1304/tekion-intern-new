import { createGame } from "./gameController.js";
import { createButtons, createGrid } from "./uiCreation.js";
import { setupUihandler } from "./uiHandler.js";

document.addEventListener("DOMContentLoaded", () => {
  createGrid();
  createButtons();
  let currentGame = createGame();
  setupUihandler(currentGame);
});
