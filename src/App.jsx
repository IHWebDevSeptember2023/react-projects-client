import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import Navbar from './components/Navbar'
import ProjectDetailPage from './pages/ProjectDetailPage'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/projects/:id' element={<ProjectDetailPage />} />
      </Routes>
    </>
  )
}

export default App
