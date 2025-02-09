import React from 'react'
import { Lumiflex } from 'uvcanvas';
import { Tranquiluxe } from 'uvcanvas';
import BubbleSoundComponent from './Fondo';
function Prueba() {
  return (
    <div>
      <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Tranquiluxe
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
        color="blue"
        speed={2}
      />
      <div style={{ position: 'relative', zIndex: 1, color: 'white', textAlign: 'center', paddingTop: '50vh' }}>
        <h1>¡Hola Mundo!</h1>
      </div>
    </div>
  
    </div>
  )
}

export default Prueba
