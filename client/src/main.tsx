import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from "./components/ThemeContext";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter future={{ v7_relativeSplatPath: true ,v7_startTransition:true}}>
          <ThemeProvider>
                    <App />
          </ThemeProvider>
                </BrowserRouter>
  </StrictMode>,
)
