import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import axios from "axios";

axios.defaults.baseURL = "http://todo-backend:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
