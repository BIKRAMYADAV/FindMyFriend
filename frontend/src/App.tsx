
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Map from './pages/Map'
import SignIn from './pages/SignIn'



function App() {
 

  return (
   <Routes>
    <Route path="/map" element ={<Map/>}/>
    <Route path="/" element = {<SignIn/>}/>
   </Routes>
  )
}

export default App
