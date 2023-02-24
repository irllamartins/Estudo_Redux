import Media from "./components/Media"
import Soma from "./components/Soma"
import Sorteio from "./components/Sorteio"
import './App.css';
import Intervalo from "./components/Intervalo";
function App() {
  return (
    <div className="App">
      <h1>Exercicio React-Redux(simples)</h1>
      <div className="linha">
        <Intervalo title="Card 1" red> </Intervalo>
      </div>
      <div className="linha">
      <Media title="Card 2" >  x </Media>
      <Soma title="Card 3" >  x </Soma>
      <Sorteio title="Card 4">  x </Sorteio>
      </div>
    </div>
  );
}

export default App;
