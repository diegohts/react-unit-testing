import { useState } from "react"

function App() {
  const [newItem, setNewItem] = useState('');
  const [list, setList] = useState(['Diego', 'Fernando', 'Henrique']);

  function addToList() {
    setTimeout(() => {
      setList(state => [...state, newItem]);      
    }, 500);
  }
  
  return (
      <>
        <ul>
          {
            list.map(item => 
              <li key={item}>
                  { item }
              </li>
            )
          }
        </ul>
        <input placeholder="Novo item" value={newItem} onChange={e => setNewItem(e.target.value)} />
        <button onClick={addToList}>Adicionar</button>
      </>
  )
}

export default App
