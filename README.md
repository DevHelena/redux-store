# 🛍️ Redux Shopping

[👉 Check out the project here](https://devhelena.github.io/redux-store/)

---

## 👩‍💻 Author
**Helena Maia**
- [LinkedIn](https://www.linkedin.com/in/devhelena/)
- [Portfolio](https://helenamaiadev.com/)

---

## 📖 About the Project
This project was developed to **practice and showcase Redux skills**, using its core functionalities and following the architectural best practices recommended in the [official documentation](https://redux.js.org/style-guide).

The project is an **online shopping app** with the following features:

- **Simple Login/Logout** → controls the logged-in and logged-out user states.
- **Shopping cart**:
  - Add products
  - Increase/decrease item quantity
  - Clear the cart
- **State management with Redux** → all data is centralized and shared across different components.

A live deployment is available for testing:
👉 [https://devhelena.github.io/redux-store/](https://devhelena.github.io/redux-store/)

> ⚠️ **Note on styling:** The main focus was on the **Redux logic**, but the project is responsive and uses **styled-components** for styling.

---

## 📚 Technologies Used

- **React** → Library for building the user interface.
- **Redux** → Global state management.
- **Styled-components** → Styling with CSS-in-JS and responsive desing.
- **Redux Logger** (optional) → Middleware to log actions and states to the console during development.

---

## 🚀 How to Run the Project Locally

### ✅ Prerequisites
- [Node.js](https://nodejs.org/) – preferably version **v20.19.4** (the same one used in development).
- **npm** or **yarn**

### ⚙️ Step-by-step
1. Clone the repository:
```bash
git clone https://github.com/DevHelena/redux-store
```

2. Navigate to the root folder:
```bash
cd redux-store
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```
---

## 🔍 Notes on Redux Logger

The project is already set up to use **Redux Logger**, a development tool that intercepts dispatched *actions* and displays them in the console, including:

- The **previous state**
- The dispatched **action**
- The **new state**

This makes **debugging during development** much easier.
> ⚠️ **Important:** Do not use this in production, as it can clutter the console and expose sensitive data.

### How to Enable It
You **don't need to install anything** – the dependency is already in the project and was downloaded when you ran `npm install` or `yarn install`.
Simply go to `src/redux/store.ts` and uncomment the lines related to [redux-logger](https://www.npmjs.com/package/redux-logger).

```ts
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
// import logger from "redux-logger"; 
// ↑ Uncomment this line and the applyMiddleware line below to enable Redux Logger.
// Redux Logger intercepts all dispatched actions and logs to the console:
// - The previous state
// - The dispatched action
// - The next state
// This is very useful for debugging during development, 
// but should not be used in production because it can clutter the console 
// and potentially expose sensitive data.

const enhancer = undefined; 
// To enable Redux Logger, replace this with:
// const enhancer = applyMiddleware(logger);

const store = createStore(rootReducer, undefined, enhancer);

export type AppDispatch = typeof store.dispatch;
export default store;
```
