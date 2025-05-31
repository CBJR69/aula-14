import React, { useState } from 'react';

function InputTexto() {
  const [textoDigitado, setTextoDigitado] = useState("");

  function handleChange(event) {
    setTextoDigitado(event.target.value);
  }

  return (
    <div>
      <input 
        type="text" 
        value={textoDigitado} 
        onChange={handleChange} 
        placeholder="Digite algo..."
      />
      <p>Texto digitado: {textoDigitado}</p>
    </div>
  );
}

export default InputTexto;