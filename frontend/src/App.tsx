
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Map from './pages/Map'
import SignIn from './pages/SignIn'
import LandingPage from './pages/LandingPage'
import Friends from './pages/Friends'



function App() {
 

  return (
   <Routes>
    <Route path="/map" element ={<Map/>}/>
    <Route path="/" element = {<SignIn/>}/>
    <Route path='/home' element={<LandingPage/>} />
    <Route path='/friends' element={<Friends/>}/>
   </Routes>
  )
}

export default App
