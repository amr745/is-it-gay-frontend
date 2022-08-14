import ReactDOM from "react-dom/client"
// IMPORT CSS FILE TO BE SOURCE OF STYLING
import "./index.css"
// IMPORT ROUTER
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
reportWebVitals()