import React, {useState} from "react";
import './style.css'

function App() {

  //Estado inicial de entrada do jogo
  const [estado, setEstado] = useState('ENTRADA')

  //Palpite
  const [palpite, setPalpite] = useState(150)

  //Palpite Minimo e Maximo
  const [minimo, setMinimo] = useState(0)
  const [maximo, setMaximo] = useState(300)

  //Número de palpites
  const [numPalpites, setNumPalpites] = useState(1)

  //Função para inicial o jogo
  const iniciarJogo = () => {
    setEstado('RODANDO')
    setMinimo(0)
    setMaximo(300)
    setNumPalpites(1)
    setPalpite(150)
  }
  // Botão dentro do IF que altera o estado, iniciando o jogo
  if(estado === 'ENTRADA') {
    return (
      <div className="App">
        <div className="container-text">
          <p>Pense em um número e veja se a máquina acertou</p>
          <p>Lembre-se, o valor deve ficar entre {minimo} e {maximo}</p>
        </div>
        <div className="container-button">
          <button onClick={iniciarJogo}>Começar a jogar</button>
        </div> 
      </div>
    )
  }

  //Palpite da Maquina

  const menor = ()=> {
    setNumPalpites(numPalpites + 1)
    setMaximo(palpite)
    const proximoPalpite = parseInt((palpite - minimo) / 2) + minimo
    setPalpite(proximoPalpite)
  }
  const maior = ()=> {
    setNumPalpites(numPalpites + 1)
    setMinimo(palpite)
    const proximoPalpite = parseInt((maximo - palpite) / 2) + palpite
    setPalpite(proximoPalpite)
  }

  const acertou = () => {
    setEstado('FIM')
  }

  if(estado === 'FIM') {
    return (
      <div className="App">
        <div className="container-text">
          <p>Acertei! O número é {palpite} com {numPalpites} chutes.</p>
        </div>
        <div className="container-button">
          <button onClick={iniciarJogo}>Começar novo jogo</button>
        </div> 
      </div>
    )
  }

  return (
    <div className="App">
      <div className="container-text">
        <p>O seu número é: {palpite}?</p>
        <p>Minimo: {minimo} / Máximo: {maximo}</p>
      </div>
      <div className="container-button">
        <button onClick={menor}>Menor</button>
        <button onClick={acertou}>Acertou!</button>
        <button onClick={maior}>Maior</button>
      </div>
    </div>
  );
}

export default App;
