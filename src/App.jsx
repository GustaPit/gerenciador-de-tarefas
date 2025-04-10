import ListaTarefas from "./components/ListaTarefas";
import './App.css';
import tarefasImg from './assets/tarefalogo.png';

function App(){

  return (
    
    <div style={{ textAlign: 'center', padding: '20px' }}>
  {/* imagem acima do título */}
  <img
     src={tarefasImg}
    alt="Logo do Gerenciador de tarefas"
    style={{ width: '80px', marginBottom: '10px' }}
  />

    <h1>Gerenciador de Tarefas</h1>
    <ListaTarefas />
    </div>
  );
}
export default App;
 