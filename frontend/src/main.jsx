import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'

import HomePage from './pages/HomePage.jsx'
import RecipePage from './pages/RecipePage.jsx'


const router = createBrowserRouter ([
  {
    path:'/',
    element: <HomePage />
  },
  {
    path:'/recipe/:recipeId',
    element: <RecipePage />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
