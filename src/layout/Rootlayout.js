import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Rootlayout() {
  return (
    <div>
         <nav>
        <Link to="home">Home</Link>
        <Link to="create">Create</Link>
        <Link to="read">Read</Link>
        
        </nav>
        <Outlet />
    </div>
  )
}

export default Rootlayout