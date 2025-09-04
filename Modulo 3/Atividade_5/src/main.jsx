import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { ThemeProvider } from './context/ThemeContext.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Detalhes from './pages/Detalhes.jsx'
import Login from './pages/Login.jsx'
import { UserProvider } from './context/UserContext.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Layout fixo
    children: [
      { path: "/", element: <App /> },
      { path: "/sobre/:movieId", element: <Detalhes /> },
      { path: "/Login", element: <Login /> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>    
    </ThemeProvider>
  </StrictMode>,
)
