import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Callus from './components/Callus'
import Callus2 from './components/Callus2'

const App = () => {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/callus" element={<Callus />} />
          <Route path="/callus-2" element={<Callus2 />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
