#!/usr/bin/env node
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const projectName = process.argv[2] || "my-app";
const projectPath = path.join(process.cwd(), projectName);

console.log(`🚀 Creating project: ${projectName}`);

// 1. Make project folder
fs.mkdirSync(projectPath);

// 2. Init npm
execSync("npm init -y", { cwd: projectPath, stdio: "inherit" });

// 3. Install dependencies
execSync("npm install react react-dom react-router-dom@6", {
  cwd: projectPath,
  stdio: "inherit",
});
execSync(
  "npm install -D typescript @types/react @types/react-dom @types/react-router-dom parcel tailwindcss @tailwindcss/postcss postcss autoprefixer",
  { cwd: projectPath, stdio: "inherit" }
);

// 4. Setup TypeScript
execSync("npx tsc --init --jsx react-jsx", {
  cwd: projectPath,
  stdio: "inherit",
});

// 5. Setup Tailwind and PostCSS
execSync("npx tailwindcss init", { cwd: projectPath, stdio: "inherit" });

// Create .postcssrc file for Parcel
fs.writeFileSync(
  path.join(projectPath, ".postcssrc"),
  `{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}`
);

// 6. Create base files
fs.writeFileSync(
  path.join(projectPath, "index.html"),
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${projectName}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="src/index.tsx"></script>
  </body>
</html>`
);

fs.mkdirSync(path.join(projectPath, "src"));
fs.writeFileSync(
  path.join(projectPath, "src/index.tsx"),
  `import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>
);`
);

fs.writeFileSync(
  path.join(projectPath, "src/App.tsx"),
  `import React from "react";
import { Route, Routes, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-blue-600">Hello React + TS + Tailwind + Router 🚀</h1>
      <nav className="my-4">
        <Link to="/" className="text-blue-500 hover:underline">Home</Link>
        {" | "}
        <Link to="/about" className="text-blue-500 hover:underline">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div className="p-4 bg-gray-100 rounded">Home Page</div>} />
        <Route path="/about" element={<div className="p-4 bg-gray-100 rounded">About Page</div>} />
      </Routes>
    </div>
  );
}`
);

fs.writeFileSync(
  path.join(projectPath, "src/index.css"),
  `@import "tailwindcss";`
);

// 7. Update Tailwind config
fs.writeFileSync(
  path.join(projectPath, "tailwind.config.js"),
  `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`
);

// 8. Add scripts to package.json
const pkgPath = path.join(projectPath, "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));

delete pkg.main;

pkg.source = "index.html";

pkg.scripts = {
  start: "parcel index.html --open",
  build: "parcel build index.html",
};

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

console.log("✅ Project setup complete!");
console.log(`\nNext steps:\n  cd ${projectName}\n  npm run start`);
