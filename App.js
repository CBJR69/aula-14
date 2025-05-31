import React from 'react';
import ContadorBasico from './ContadorBasico';
import InputTexto from './InputTexto';
import Alternador from './Alternador';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Exercícios React - Aula 14</h1>
      
      <section style={{ marginBottom: '40px' }}>
        <h2>1. Contador Básico</h2>
        <ContadorBasico />
      </section>
      
      <section style={{ marginBottom: '40px' }}>
        <h2>2. Campo de Texto Controlado</h2>
        <InputTexto />
      </section>
      
      <section>
        <h2>3. Alternador de Conteúdo</h2>
        <Alternador />
      </section>
    </div>
  );
}

export default App;