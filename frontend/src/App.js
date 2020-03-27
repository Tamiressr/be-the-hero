import React,{useState} from 'react';
import Header from './Header';
import Routes from './routes';
import './global.css';

function App() {
  const [counter,setCounter]=useState(0);
//quando usa o useState retorna um array {valor, funçãoDeAtualização}
  function increment(){
   setCounter(counter+1);
  }

  return (
    <div>
     {/* sempre que for usar uma variável adicionar chaves  */}
     <Routes/>
      {/* <Header >Contador: {counter}</Header>
      <button onClick={increment}> Incrementar</button>
     */}
    </div>
  );
}

export default App;
