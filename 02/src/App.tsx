import { useState } from "react";
import "./App.css";

function App() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const mostrarMensagem = () => {
    if (nome.trim() === "") {
      setMensagem("Por favor, digite seu nome.");
    } else {
      setMensagem(`Olá, ${nome}! Seja bem-vindo(a).`);
    }
  };

  return (
    <div className="container">
      <h1>Olá, React com TypeScript!</h1>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button onClick={mostrarMensagem}>Mostrar saudação</button>
      <p>{mensagem}</p>
    </div>
  );
}

export default App;
