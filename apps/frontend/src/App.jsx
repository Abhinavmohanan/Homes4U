// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import "./App.css";
import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  const [current, setCurrent] = useState(0);
  const switchToSignUp = () =>{
    let option1 = document.querySelector(".login-option");
    let option2 = document.querySelector(".sign-up-option");
    if (option2.classList.contains("current")) {
      return;
    }
    let loginForm = document.querySelector(".login-form");
    loginForm.style.marginLeft = "-1000px";
    option1.classList.toggle("current");
    option2.classList.toggle("current");
    setTimeout(switchSignUp, 230);
  }
  function switchToLogIn() {
    let option1 = document.querySelector(".login-option");
    let option2 = document.querySelector(".sign-up-option");
    if (option1.classList.contains("current")) {
      return;
    }
    let loginForm = document.querySelector(".sign-up-form");
    loginForm.style.marginRight = "-1000px";
    option1.classList.toggle("current");
    option2.classList.toggle("current");
    setTimeout(switchLogIn, 230);
  }
  const switchSignUp = () => {
    setCurrent(1);
  }
  function switchLogIn() {
    setCurrent(0);
  }
  return (
    <div className="App">
      <div className="container">
        <div className="login-sign-up-option">
          <div
            onClick={() => switchToLogIn()}
            className="login-option option current"
          >
            Log In
          </div>
          <div
            onClick={() => switchToSignUp()}
            className="sign-up-option option"
          >
            Sign Up
          </div>
        </div>
        {current === 0 ? (
          <Login current={current} setCurrent={setCurrent} switchToSignUp={switchToSignUp} switchSignUp={switchSignUp} />
        ) : (
          <Signup current={current} setCurrent={setCurrent} switchToLogIn={switchToLogIn} switchLogIn={switchLogIn} />
        )}
      </div>
    </div>
  );
}

export default App;

