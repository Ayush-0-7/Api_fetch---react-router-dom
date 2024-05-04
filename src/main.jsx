import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import User from './User/User.jsx'
import Github from './Github/Github.jsx'
const router= createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>} >
           <Route path='' element={<Home/>}/>
           <Route path='about' element={<About/>}/>
           <Route path='user/:userid' element={<User/>}/>
           <Route path='github' element={<Github/>}/>
      </Route>
    )
  
  
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
