import { TaskList } from './components/TaskList'
import { Header } from "./components/Header";
import './styles/global.scss'

interface TaskP {
  id: number;
  title: string;
  isComplete: boolean;
}



export function App() {
  return (
    <>
      <Header />
      <TaskList  />
    </>
  )
}