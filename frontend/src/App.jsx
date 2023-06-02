
import './App.css'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AfterLoginSignup from './pages/AfterLoginSignup'
import Signup from './pages/Signup'
import Login from './pages/Login'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route exact path="/Login" element={<Login />} />
      <Route exact path="/Signup" element={<Signup />} />
      <Route exact path="/posts" element={<AfterLoginSignup/>} />

    </Routes>
  </BrowserRouter>

    //<AfterLoginSignup/>

  )
}

export default App


//space evenly
//