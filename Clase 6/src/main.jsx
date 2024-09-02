import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div style={{background:"rgb(240, 240, 47)"}}>
    <App />
    </div>
  </StrictMode>,
)
