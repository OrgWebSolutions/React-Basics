# Program 1: To install Node.js, set up a React project using Create React App, and explore the core concepts of React.

This guide will help you install Node.js, set up a React project using Create React App, and explore the core concepts of React.

---

## Step 1: Install Node.js

### Windows Installation

1. **Download Node.js**
   - Visit the official Node.js website: [https://nodejs.org/](https://nodejs.org/)
   - Download the **LTS (Long Term Support)** version (recommended for most users)
   - Choose the Windows Installer (.msi) for your system (64-bit or 32-bit)

2. **Run the Installer**
   - Double-click the downloaded `.msi` file
   - Follow the installation wizard
   - Accept the license agreement
   - Keep the default installation path (usually `C:\Program Files\nodejs\`)
   - Make sure "Add to PATH" option is checked
   - Click "Install"

3. **Verify Installation**
   ```bash
   node --version
   # or
   node -v
   ```
   Expected output: `v20.x.x` (or your installed version)

   ```bash
   npm --version
   # or
   npm -v
   ```
   Expected output: `10.x.x` (or your installed version)
```
```

## Step 2: Set Up a React Project Using Create React App

### Create a New React Project

1. **Open Terminal/Command Prompt**
   - Navigate to the folder where you want to create your project
   ```bash
   cd "d:\VS Code\FSd\01 Install Node"
   ```

2. **Create React App**
   ```bash
   npx create-react-app my-first-react-app
   ```
   
   This command will:
   - Download and install all necessary dependencies
   - Set up the project structure
   - Configure build tools automatically

3. **Navigate to Project Directory**
   ```bash
   cd my-first-react-app
   ```

4. **Start the Development Server**
   ```bash
   npm start
   ```
   
   This will:
   - Start the development server
   - Open your browser automatically at `http://localhost:3000`
   - Enable hot-reloading (changes reflect immediately)

### Project Structure

```
my-first-react-app/
├── node_modules/          # All dependencies
├── public/
│   ├── index.html        # Main HTML file
│   └── favicon.ico       # App icon
├── src/
│   ├── App.js            # Main App component
│   ├── App.css           # App styles
│   ├── index.js          # Entry point
│   └── index.css         # Global styles
├── package.json          # Project metadata and dependencies
├── package-lock.json     # Dependency lock file
└── README.md            # Project documentation
```

---

## Step 3: Explore Core Concepts of React

### 1. Components

Components are the building blocks of React applications. They are reusable pieces of UI.

**Functional Component Example:**
```javascript
// src/components/Welcome.js
import React from 'react';

function Welcome() {
  return (
    <div>
      <h1>Welcome to React!</h1>
    </div>
  );
}

export default Welcome;
```

**Using the Component:**
```javascript
// src/App.js
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Welcome />
    </div>
  );
}

export default App;
```

### 2. JSX (JavaScript XML)

JSX allows you to write HTML-like syntax in JavaScript.

```javascript
function Greeting() {
  const name = "John";
  return <h1>Hello, {name}!</h1>;  // JSX expression
}
```

**JSX Rules:**
- Must return a single parent element
- Use `className` instead of `class`
- Use `camelCase` for attributes (e.g., `onClick`, not `onclick`)
- JavaScript expressions go inside curly braces `{}`

### 3. Props (Properties)

Props allow you to pass data from parent to child components.

```javascript
// Parent Component
function App() {
  return <UserCard name="Alice" age={25} />;
}

// Child Component
function UserCard({ name, age }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}
```

### 4. State

State allows components to manage dynamic data.

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

### 5. Event Handling

React handles events using camelCase syntax.

```javascript
function Button() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

### 6. Rendering Lists

Use `.map()` to render multiple components dynamically.

```javascript
function StudentList() {
  const students = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];

  return (
    <ul>
      {students.map(student => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
}
```

### 7. Conditional Rendering

Render components conditionally using JavaScript operators.

```javascript
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in</h1>}
    </div>
  );
}
```

---

## Useful NPM Commands

```bash
# Start development server
npm start

# Create production build
npm run build

# Run tests
npm test

# Install a new package
npm install package-name

# Install package as dev dependency
npm install --save-dev package-name

# Uninstall a package
npm uninstall package-name

# Update all packages
npm update

# Check for outdated packages
npm outdated
```

---
---

## Next Steps

1. ✅ Install Node.js
2. ✅ Create your first React app
3. ✅ Learn core React concepts
4. 🎯 Build a simple project (Todo List, Calculator, etc.)
5. 🎯 Explore React Hooks (useState, useEffect, etc.)
6. 🎯 Learn React Router for navigation
7. 🎯 Practice with real-world projects

Happy Coding! 🚀

---

## 🌐 Visit My Websites

- **Portfolio**: [https://www.gu-saurabh.site](https://www.gu-saurabh.site)
- **Tech Site**: [https://www.gu-saurabh.tech](https://www.gu-saurabh.tech)

---

## 🤝 Connect With Me

<p align="center">
  <a href="https://www.linkedin.com/in/Saurabhtbj1201/"><img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
  <a href="https://x.com/saurabhtbj1201"><img src="https://img.shields.io/badge/Twitter-%231DA1F2.svg?logo=Twitter&logoColor=white" alt="Twitter"/></a>
  <a href="https://www.instagram.com/saurabhtbj1201"><img src="https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white" alt="Instagram"/></a>
  <a href="https://www.facebook.com/Saurabhtbj1201"><img src="https://img.shields.io/badge/Facebook-%231877F2.svg?logo=Facebook&logoColor=white" alt="Facebook"/></a>
  <a href="https://www.quora.com/profile/Saurabh-Kumar-17241"><img src="https://img.shields.io/badge/Quora-%23B92B27.svg?logo=Quora&logoColor=white" alt="Quora"/></a>
  <a href="https://saurabh-12.blogspot.com/"><img src="https://img.shields.io/badge/Blogger-%23FF5722.svg?logo=Blogger&logoColor=white" alt="Blogger"/></a>
  <a href="https://saurabh1201.medium.com/"><img src="https://img.shields.io/badge/Medium-%2312100E.svg?logo=Medium&logoColor=white" alt="Medium"/></a>
  <a href="https://www.gu-saurabh.tech"><img src="https://img.shields.io/badge/Portfolio-%2300C4CC.svg?logo=Google-Chrome&logoColor=white" alt="Portfolio"/></a>
  <a href="https://wa.me/919798024301"><img src="https://img.shields.io/badge/WhatsApp-25D366?style=flat&logo=whatsapp&logoColor=white" alt="WhatsApp"/></a>
</p>

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## ⭐ Show Your Support

Give a ⭐️ if this project helped you learn React and MongoDB!

---

## 📄 Copyright & License

© 2025 **Saurabh Kumar**. All Rights Reserved.

This project is licensed for **educational purposes only**. You are free to:
- Use the code for learning
- Modify and experiment with the code
- Share with proper attribution

**Restrictions:**
- Commercial use is not permitted without permission
- Must provide attribution to the original author

---

## 📞 Contact

**Saurabh Kumar**
- Website: [gu-saurabh.site](https://www.gu-saurabh.site)
- LinkedIn: [@Saurabhtbj1201](https://www.linkedin.com/in/Saurabhtbj1201/)
- Email: [Contact through website](https://www.gu-saurabh.site)

---

> Designed with 💡 by [Saurabh Kumar](https://www.linkedin.com/in/saurabhtbj1201)

---

## 📈 Project Stats

![GitHub last commit](https://img.shields.io/github/last-commit/yourusername/react-app)
![GitHub repo size](https://img.shields.io/github/repo-size/yourusername/react-app)
![GitHub stars](https://img.shields.io/github/stars/yourusername/react-app?style=social)

---

**Happy Coding! 🚀**
