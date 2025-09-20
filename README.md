# Basic React Toolkit

A simple CLI tool to quickly scaffold a React TypeScript project with Tailwind CSS and React Router.

## Features

- ⚛️ **React 18** with TypeScript support
- 🎨 **Tailwind CSS** for styling
- 🧭 **React Router v6** for navigation
- 📦 **Parcel** as the build tool
- 🚀 **Zero configuration** - works out of the box

## Quick Start

```bash
# Create a new project
npx basic-react-toolkit my-awesome-app

# Navigate to your project
cd my-awesome-app

# Start development server
npm start
```

## What's Included

Your new project will have:

- **Modern React setup** with functional components and hooks
- **TypeScript configuration** with JSX support
- **Tailwind CSS** with PostCSS integration
- **React Router** with basic routing examples
- **Development server** with hot reloading
- **Production build** setup

## Project Structure

```
my-app/
├── index.html              # Entry HTML file
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── .postcssrc              # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
└── src/
    ├── index.tsx           # React entry point
    ├── App.tsx             # Main App component
    └── index.css           # Tailwind CSS imports
```

## Available Scripts

In your project directory, you can run:

### `npm start`

Runs the app in development mode with hot reloading.
Open [http://localhost:1234](http://localhost:1234) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.
The build is minified and optimized for the best performance.

## Usage Examples

### Basic Usage

```bash
npx basic-react-toolkit
```

Creates a project named `my-app` in the current directory.

### Custom Project Name

```bash
npx basic-react-toolkit my-custom-project
```

Creates a project with your specified name.

## Tech Stack

- **React**: Frontend library for building user interfaces
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Declarative routing for React
- **Parcel**: Zero-configuration build tool

## Requirements

- Node.js 14 or higher
- npm or yarn

## Customization

After creating your project, you can:

1. **Modify Tailwind configuration** in `tailwind.config.js`
2. **Add new routes** in `src/App.tsx`
3. **Install additional dependencies** as needed
4. **Configure TypeScript** in `tsconfig.json`

## Example Code

The generated project includes a simple example with routing:

```tsx
// src/App.tsx
import React from "react";
import { Route, Routes, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-blue-600">
        Hello React + TS + Tailwind + Router 🚀
      </h1>
      <nav className="my-4">
        <Link to="/" className="text-blue-500 hover:underline">
          Home
        </Link>
        {" | "}
        <Link to="/about" className="text-blue-500 hover:underline">
          About
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
      </Routes>
    </div>
  );
}
```

## Contributing

Issues and pull requests are welcome! Feel free to check the [issues page](https://github.com/sudeepdeep/basic-react-toolkit/issues).

## License

MIT

## Support

If you find this tool helpful, please consider giving it a ⭐ on [GitHub](https://github.com/sudeepdeep/basic-react-toolkit)!

---

**Happy coding!** 🎉
