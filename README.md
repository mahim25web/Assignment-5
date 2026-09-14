# Dev Stack Builder

Dev Stack is a responsive React website for exploring modern development tools and assembling a personal technology stack. Browse categorized technologies, compare their difficulty and ratings, and save the tools you want to use together.

## Technologies Used

- React.js and Vite
- JavaScript ES6+
- CSS with responsive media queries
- React Toastify
- Local JSON technology data

## Features

1. Responsive desktop and mobile navigation with a sticky header.
2. JSON-powered technology cards with category, difficulty, rating, badge, and icon details.
3. Interactive Your Stack sidebar with duplicate protection, remove actions, clear-all support, and toast notifications.

## React Questions
### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like markup inside JavaScript. React uses it to describe what the interface should look like in a readable way.

### 2. What is the difference between props and state?

Props are values passed into a component by its parent. State is data owned by a component that can change and trigger a re-render.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores changing data in a function component. This project uses it for loaded technologies, the selected stack, and the mobile menu state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects after rendering. It loads the local technology data after the app starts and provides the required loading state.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique key helps React identify which list items changed, were added, or were removed. This lets React update the DOM efficiently and correctly.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering displays different UI based on a condition. The stack sidebar displays `Your stack is empty` when the stack has no selected technologies, and renders stack items otherwise.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data through props, such as passing a technology to `TechnologyCard`. The parent can pass a callback too, allowing the child to notify the parent when the Add to Stack button is clicked.
   