import React, { useState } from 'react';
import rafa from '../Img/rafa.jpg';
import rafa2 from '../Img/rafa2.jpg';
import RAFA3 from '../Img/RAFA3.jpg';
import rafa4 from '../Img/rafa4.jpg';
import rafa5 from '../Img/rafa5.gif';



const ValentineInvite = () => {
  const [response, setResponse] = useState(null);
  const [noClickCount, setNoClickCount] = useState(0);

  const handleYes = () => setResponse('yes');
  const handleNo = () => {
    setNoClickCount(prev => prev + 1);
    setResponse('no');
  };

  const noMessages = [
    "😢 Oh... está bien, igual eres especial para mí.",
    "😭 No puede ser... ¡Dime que es una broma!", 
    "🥺 Bueno, supongo que pasaré el 14 solo...", 
    "😔 Mi corazón está en mil pedazos ahora mismo.",
    "😩 Ok, pero piensa en lo que te pierdes 😉"
  ];

  const Img_rafa = [rafa, rafa2, RAFA3, rafa4, rafa5];

  return (

    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-200 to-pink-400 p-4">
      
      <div className="p-6 shadow-2xl rounded-2xl bg-white text-center max-w-sm w-full sm:max-w-md lg:max-w-lg">
        {response === null && (
          <>
          <div className='Content_text'>
          <h1 className="text-3xl font-extrabold text-pink-600 mb-6 animate-bounce" >
              💕 ¿Quieres ser mi 14 de febrero? 💕
            </h1>
            <div className='Image_rafa2'>
            <img  src={rafa5} alt="" />
            </div>
            
          </div>
            <div className='Botones'>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={handleYes} 
                className="bg-green-400 hover:bg-green-500 text-white px-6 py-3 rounded-full text-lg shadow-lg transition transform hover:scale-105">
                SÍ
              </button>
              <button 
                onClick={handleNo} 
                className="bg-red-400 hover:bg-red-500 text-white px-6 py-3 rounded-full text-lg shadow-lg transition transform hover:scale-105">
                NO
              </button>
            </div>
            </div>
           
          </>
        )}
        <div className='Content_text'>
        {response === 'yes' && (
         <div className='gracias'>
          <h2 className="text-2xl text-green-600 mt-6 font-semibold animate-pulse">
            😍✨ ¡Gracias por aceptar! Va a ser el mejor 14 de febrero 💕✨
          </h2>
          </div>
        )}

        {response === 'no' && (
          <div className="mt-6">
            <h2 className="text-xl text-red-600 font-medium animate-fade-in">
              {noMessages[noClickCount % noMessages.length]}
            </h2>
            <div className='Image_rafa'>
            <img 
              src={Img_rafa[noClickCount % Img_rafa.length]} 
              alt="Triste" 
              className="custom-image mx-auto mt-4"
              id='rafas'
            />
            </div>
           
            <div className='Otra_vez'> 
             <button 
              onClick={handleNo} 
              className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-full mt-4 shadow-md transition transform hover:scale-105">
              NO otra vez 😅
            </button> </div>
           
          </div>
        )}

        </div>
       
      </div>
   
    </div>
  );
};

export default ValentineInvite;


