import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import TaskManager from './components/TaskManager'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <TaskManager />
    </ThemeProvider>
  )
}

export default App