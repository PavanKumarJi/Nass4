import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Sign_Up from './FormCompo/Sign_Up'
import Login from './FormCompo/Login'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <div><button><Link to={'/sign_up'}>Sign_Up</Link></button></div>
      <div><button><Link to={'/login'}>Login</Link></button></div>
    </div>
      <Routes>
        <Route path='/sign_up'  element={<Sign_Up />}>Sign_Up</Route>
        <Route path='/login' element={<Login />}>Login</Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
