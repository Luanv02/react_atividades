import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Como instalar o React.js na sua máquina.</h1>
      </header>
      <main>
        <p>Passo a passo para a instalação do framework React.js.</p>
        <ul>
          <li>Instalar o Node.js no site oficial, e configurar.</li>
          <li>Instalar o npm, utilizando o comando "npm install", no terminal cmd, bash ou no próprio VSC.</li>
          <li>Criar pasta, entrar na pasta criada e puxar toda a biblioteca do React, usando os seguintes comandos respectivamente: "mkdir nome-da-pasta", "cd nome-da-pasta", "create-react-app nome-da-pasta". (Criação da pasta pode ser feito manualmente.)</li>
          <li> Já com toda a biblioteca baixada, basta entrar na pasta criada usando o mesmo comando "cd nome-da-pasta", e começar o servidor usando o comando "npm start".</li>
        </ul>
      </main>
    </div>
  );
}

export default App;
