import { useState } from "react"

function App() {
  const [list, setList] = useState(['Diego', 'Fernando', 'Henrique']);

  function addToList() {
    setList(state => [...state, 'Novo']);
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
        <button onClick={addToList}>Adicionar</button>
      </>
  )
}

export default App
