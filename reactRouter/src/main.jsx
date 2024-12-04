import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './componenets/Home/Home.jsx'
import About from './componenets/About/About.jsx'
import Layout from './Layout.jsx'
import Contact from './componenets/Contact/Contact.jsx'
import User from './componenets/User/User.jsx'
import Github from './componenets/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
       element:<Home/>, 
      },
      {
        path:'/about',
       element:<About/>, 
      },
      {
        path:'/contact',
       element:<Contact/>, 
      },
      {
        path:'/user/:userid',
       element:<User/>, 
      },
      {
        path:'/github',
       element:<Github/>, 
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
