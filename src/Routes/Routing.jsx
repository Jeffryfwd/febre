import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PEjercicio from '../pages/PEjercicio';
function Routing() {
  return (
    <div>
      <Router>

        <Routes>
            <Route path='/' element={<PEjercicio/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default Routing
