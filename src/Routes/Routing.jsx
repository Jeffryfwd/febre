import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PEjercicio from '../pages/PEjercicio';
import Pprueba from '../pages/Pprueba';
function Routing() {
  return (
    <div>
      <Router>

        <Routes>
            <Route path='/' element={<PEjercicio/>}></Route>
            <Route path='/prueba' element={<Pprueba/>}></Route>

        </Routes>
      </Router>
    </div>
  )
}

export default Routing
