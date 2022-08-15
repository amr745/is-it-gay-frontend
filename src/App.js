import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import { useState } from "react";
import { getUser, logout } from "./services/register";
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const [userState, setUserState] = useState({ user: getUser() });

    function handleRegisterOrLogin() {
        setUserState({ user: getUser() });
    }

    function handleLogout() {
        logout();
        setUserState({ user: null });
    }

  return (
    <div className="App">
      <Header
        user={userState.user}
        handleLogout={handleLogout}
      />
      <Main
        user={userState.user}
        handleRegisterOrLogin={handleRegisterOrLogin}
      />
      <Footer />
    </div>
  )
}

export default App