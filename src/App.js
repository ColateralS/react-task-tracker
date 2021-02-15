import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Estudiar JS',
        day: 'Febrero 16 de 8:00 a.m a 4:00 p.m',
        reminder: true,
    },
    {
        id: 2,
        text: 'Estudiar ReactJS',
        day: 'Febrero 17 de 8:00 a.m a 4:00 p.m',
        reminder: true,
    },
    {
        id: 3,
        text: 'Estudiar NextJS',
        day: 'Febrero 18 de 8:00 a.m a 4:00 p.m',
        reminder: false,
    },

])
  
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
