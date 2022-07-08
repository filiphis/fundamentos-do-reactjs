import { useState } from 'react'
import './styles.css'
import Card from '../../components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1>Lista de presença</h1>
      <input type="text" placeholder='Digite o nome...' />
      <button type="submit">Adicionar</button>

    <Card name="Gustavo" time="01:00:52" />
    <Card name="Rafaela" time="21:52:15" />
    <Card name="Luiz" time="10:15:20" />
    </div>
  )
}

export default App
