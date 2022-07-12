import { useState, useEffect } from 'react'
import './styles.css'
import Card from '../../components/Card'

function App() {
  const [userName, setUserName] = useState('');
  const [students, setStudents] = useState([]);
  const [gitUser, setGitUser] = useState({name: '', avatar: ''})

  function handleAddStudent(){
    const student = {
      name: userName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }

    setStudents(students => [...students, student])
  }

  useEffect(  () => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/filiphis');
      const data = await response.json();
      setGitUser({
        name: data.name,
        avatar: data.avatar_url
      });
    }

    fetchData();
  }, []);

  return (
    <div className='container'>
      <header>
        <h1>Lista de presença</h1>

        <div className='perfil__wrapper'>
          <strong className='perfil__name'>{gitUser.name}</strong>
          <img className='image__perfil' src={gitUser.avatar} alt="" />
        </div>
      </header>
      <input type="text" placeholder='Digite o nome...' onChange={e => setUserName(e.target.value)} onKeyDown={e => e.key == 'Enter' ? handleAddStudent() : '' } />
      <button type="submit" onClick={handleAddStudent}>Adicionar</button>

    

    {
      students.map((student, count) => <Card name={student.name} time={student.time} key={count} />)
    }
    </div>
  )
}

export default App
