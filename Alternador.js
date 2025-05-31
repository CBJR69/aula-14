import React, { useState } from 'react';

function Alternador() {
  const [estaVisivel, setEstaVisivel] = useState(false);

  function handleToggle() {
    setEstaVisivel(!estaVisivel);
  }

  return (
    <div>
      <button onClick={handleToggle}>
        {estaVisivel ? "Esconder" : "Mostrar"}
      </button>
      {estaVisivel && <p>Olá, eu sou visível!</p>}
    </div>
  );
}

export default Alternador;