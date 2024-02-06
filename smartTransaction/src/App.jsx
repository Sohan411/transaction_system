
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Home from './pages/Home';
import About from './pages/About'
import Modes from './pages/Modes'
import Mode1 from './pages/Mode1'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact';
import Mode2 from './pages/Mode2';
import Mode3 from './pages/Mode3';
import Mode4 from './pages/Mode4';




function App() {
  return (
    <>
    
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/about' element={<About/>} />
      <Route exact path='/modes' element={<Modes/>} />
      <Route exact path='/contact' element={<Contact/>}/> 
     

      <Route exact path='/mode1' element={<Mode1/>}/>
      <Route exact path='/mode2' element={<Mode2/>}/>
      <Route exact path='/mode3' element={<Mode3/>}/>
      <Route exact path='/mode4' element={<Mode4/>}/>
       {/* <Redirect to="/"/> */}
      </Routes>
    </>
  )
}

export default App
