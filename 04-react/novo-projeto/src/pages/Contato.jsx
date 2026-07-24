/*export default function Contato() {
    return <h1>Fale conosco</h1>;
  }
*/

// src/pages/Contato.jsx (editar o arquivo inteiro)

  import { useState } from "react";
  export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  function handleSubmit(e) {
      e.preventDefault();
  console.log("Enviado:", nome, email);
    }
  return (
      <div>
        <h1>Fale conosco</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  } 

  