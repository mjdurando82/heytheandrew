import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ApArt from './components/ApArt'
import ApArt2 from './components/ApArt2'
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
          <Route path="/ap-art" element={<ApArt />} />
          <Route path="/ap-art2" element={<ApArt2 />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
