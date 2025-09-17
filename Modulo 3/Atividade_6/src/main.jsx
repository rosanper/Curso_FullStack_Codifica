import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from './contexts/ThemeContext';
import { ContadorProvider } from './contexts/ContadorContext';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ContadorProvider>
        <RouterProvider router={router} />
      </ContadorProvider>
    </ThemeProvider>
  </StrictMode>,
)
