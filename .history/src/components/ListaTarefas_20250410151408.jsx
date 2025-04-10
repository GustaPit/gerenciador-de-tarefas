import { useState } from 'react';
 import { useEffect } from 'react'; 



function ListaTarefas() {
  // guarda a lista de tarefas
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');
  const [erro, setErro] = useState('');// mensagem de erro, caso tente adicionar uma tarefa sem prencher a caixa
  
 useEffect(() => {
    const tarefasSalvas = localStorage.getItem('tarefas2');
    console.log(tarefasSalvas)
    if (tarefasSalvas) {
      let t = JSON.parse(tarefasSalvas);
      console.log("t", t)
      setTarefas(t);
      console.log(tarefas)
    } else {
      setTarefas([]);
    }
  }, []);
   // sempre que a lista de tarefas muda, atualiza no localStorage
   useEffect(() => {
    // let jTarefas = {
    //   tarefas: tarefas
    // }

    localStorage.setItem('tarefas2',JSON.stringify(tarefas));
  }, [tarefas]); 

  const adicionarTarefa = () => { // adiciona uma tarefa nova
    if (novaTarefa.trim() === '') {
      setErro('digite uma tarefa antes de adicionar.'); ////caso a caixa de texto esteja vazia e o usuario clique no botão de 'Adicionar', aparecerá esta mensagem
      return;
    }

    let novasTarefas = [...tarefas, novaTarefa];
    console.log(novasTarefas)

    setTarefas(novasTarefas);
    setNovaTarefa('');
    setErro('');
    console.log(tarefas)
    console.log(novaTarefa);
  };

  const removerTarefa = (indice) => { // remove a tarefa clicada
    setTarefas(tarefas.filter((_, i) => i !== indice));
  };

  const ordenarTarefas = () => {
    if (tarefas.length === 0) {
      setErro('não existe tarefas para ordenar.'); //caso a caixa de texto esteja vazia e o usuario clique no botão de 'Ordenar', aparecerá esta mensagem
      return;
    }
  
    const tarefasOrdenadas = [...tarefas].sort((a, b) =>
      a.localeCompare(b, 'pt', { sensitivity: 'base' }) //ordena a Lista de tarefas em ordem alfabetica
    );
    setTarefas(tarefasOrdenadas);
    setErro(''); // limpa os erros anteriores
  };
  
  return (
    <div>
      <h2>Lista de Tarefas</h2>

      
      <input // campo pra digitar as tarefas 
        type="text"
        value={novaTarefa}
        onChange={(e) => {
          setNovaTarefa(e.target.value);
          setErro('');
        }}
        placeholder="Digite uma nova tarefa"
      />

      
      <button onClick={adicionarTarefa}>Adicionar</button> {/* botão pra adicionar as tarefas */}
      <button onClick={ordenarTarefas}>Ordenar de A-Z</button> {/* botão pra ordenar as tarefas */}

      {/* mostra o erro caso tenha */}
      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      {console.log(tarefas)}
      <ul>
        {tarefas.map((tarefa, indice) => (
          <li key={indice}>
            <span style={{ color: 'white' }}>{tarefa}</span> {/*muda a cor apenas das tarefas adicionadas*/}
            <button onClick={() => removerTarefa(indice)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTarefas;

