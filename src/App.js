import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Create from './components/Create'
import Read from './components/Read'
import Rootlayout from './layout/Rootlayout'
import Pagenotfound from './components/Pagenotfound'
import Update from './components/Update'


const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='Home' element={<Home/>}/>
                    <Route path="create" element={<Create/>}/>
                    <Route path="Read" element={<Read/>}/>
                    <Route path='*' element={<Pagenotfound/>}/>
                    <Route path='update/:id' element={<Update/>}/>
                    </Route>
  )
  
)

function App() {
  return (
   
    <div>
      <RouterProvider router={route}/>

      
    </div>
  )
}

export default App