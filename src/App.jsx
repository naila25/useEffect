import React, { useState, useEffect } from 'react';

function ContadorConTitulo() {
  const [contador, setContador] = useState(0);

  // useEffect para actualizar el título del documento
  useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]); 

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

// Cuando haces clic en el botón, el contador aumenta, y debido al useEffect, el título de la página en el navegador se actualiza
//  para reflejar el nuevo valor del contador.
export default ContadorConTitulo;
