import React from "react"
import ReactDOM from "react-dom/client"
// IMPORT CSS FILE TO BE SOURCE OF STYLING
import "./index.css"
// IMPORT ROUTER
import { HashRouter } from 'react-router-dom'
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
reportWebVitals()