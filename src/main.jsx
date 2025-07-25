import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import "./index.css"

const root = document.getElementById("root");
const Root = createRoot(root);

Root.render(<App />)