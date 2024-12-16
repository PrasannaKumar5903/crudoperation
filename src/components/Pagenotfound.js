import React from 'react'
import { Link } from 'react-router-dom'

function Pagenotfound() {
  return (
    <div>
      <h1>Page not found</h1>
        <p>The page you were looking for is not found. It might have been removed</p>
        <Link to="home">Back to Home page</Link>
      
    </div>
  )
}

export default Pagenotfound