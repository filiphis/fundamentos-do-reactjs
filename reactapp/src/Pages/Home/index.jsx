import { useState } from 'react'
import './styles.css'
import Card from '../../components/Card'

function App() {
  const [userName, setUserName] = useState('');
  const [students, setStudents] = useState([]);

  function handleAddStudent(){
    const student = {
      name: userName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }

    setStudents([...students, student])
  }

  return (
    <div className='container'>
      <h1>Lista de presença</h1>
      <input type="text" placeholder='Digite o nome...' onChange={e => setUserName(e.target.value)} />
      <button type="submit" onClick={handleAddStudent}>Adicionar</button>

    

    {
      students.map((student, count) => <Card name={student.name} time={student.time} key={count} />)
    }
    </div>
  )
}

export default App
