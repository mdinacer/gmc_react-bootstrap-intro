# First React Bootstrap App

## Overview
This project demonstrates the first contact with React and React Bootstrap, creating a basic application with navigation, headings, and cards.

## Prerequisites

### 1. Install Required Software
- **NodeJS**: Download and install from https://nodejs.org/en
- **VSCode**: Download and install from https://code.visualstudio.com/

## Instructions

### 1. Create React App
```bash
npx create-react-app <project-name>
cd <project-name>
```
*Replace `<project-name>` with your desired project name*

### 2. Clean Up Project Structure
- Navigate to the `src` folder
- Delete all files **except**:
  - `reportWebVitals.js`
  - `index.js`

### 3. Install React Bootstrap
```bash
npm install react-bootstrap bootstrap
```

### 4. Import Bootstrap CSS
Add to your `src/index.js` or create in `src/index.css`:
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

### 5. Create App.js Component
- Create a new file called `App.js` in the `src` folder
- Import necessary modules including React and React Bootstrap components
- Use React Fragment to wrap components
- Create a div with className "App"
- Add React Bootstrap components:
  - Navbar
  - Heading
  - 3 Cards

### Project Structure
```
src/
├── App.js          (Main App component)
├── index.js        (Entry point)
├── reportWebVitals.js
└── index.css       (Optional: Bootstrap imports)
```

### 6. Required Components to Include
- **React Fragment**: Wrap your JSX elements
- **Navbar**: Navigation component from React Bootstrap
- **Heading**: Title/heading element
- **Cards**: Three Bootstrap cards with content

### 7. Run the Project
```bash
npm start
```

The application will run on `http://localhost:3000`

## Key Concepts Demonstrated
- ✅ React app creation with create-react-app
- ✅ React Bootstrap integration
- ✅ React Fragments usage
- ✅ Bootstrap component implementation (Navbar, Cards, Headings)
- ✅ JSX and component structure
- ✅ CSS class management with className

## Useful References
- **React Documentation**: https://react.dev/
- **React Bootstrap Documentation**: https://react-bootstrap.github.io/
- **React Bootstrap Get Started**: https://react-bootstrap.github.io/getting-started/introduction/

## Components to Research
- **React Fragments**: Learn about their uses and benefits
- **React Bootstrap Navbar**: Navigation component
- **React Bootstrap Cards**: Content containers
- **React Bootstrap Headings**: Typography components

## Next Steps
After completing this checkpoint, you'll have:
- A working React application
- Understanding of React Bootstrap integration
- Experience with basic React components
- Foundation for more advanced React development
