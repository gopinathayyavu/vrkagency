// Shared utilities or global functions can be placed here.
// For this project, each page handles its own logic for better readability.
// This file is intentionally minimal but kept for structure.
console.log("FinTrack App Loaded");


function minimize() {
    Neutralino.window.minimize();
}

function maximize() {
    Neutralino.window.maximize();
}

function closeApp() {
    Neutralino.app.exit();
}