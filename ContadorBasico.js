import React, { useState } from 'react';

function ContadorBasico() {
  const [numero, setNumero] = useState(0);

  function handleClick() {
    setNumero(numero + 1);
  }

  return (
    <div>
      <p>Contagem: {numero}</p>
      <button onClick={handleClick}>Incrementar</button>
    </div>
  );
}

export default ContadorBasico;