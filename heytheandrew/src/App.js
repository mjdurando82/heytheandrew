import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Callus from './components/Callus'

const App = () => {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/callus" element={<Callus />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
