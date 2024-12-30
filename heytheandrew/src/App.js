import './index.css'
import { Routes, Route } from 'react-router-dom'

import Cbs from './components/Cbs'
import Home from './components/Home'
import Wader from './components/Wader'
import ApArt from './components/ApArt'
import ApArt2 from './components/ApArt2'
import Callus from './components/Callus'
import Callus2 from './components/Callus2'
import Callus3 from './components/Callus3'
import GraphicDesign from './components/GraphicDesign'
import GraphicDesign2 from './components/GraphicDesign2'

const App = () => {
  return (
    <div>
      <main>
        <Routes>
          <Route exaxt path="/" element={<Home />} />
          <Route exaxt path="/ap-art" element={<ApArt />} />
          <Route exaxt path="/ap-art-2" element={<ApArt2 />} />
          <Route exaxt path="/cbs" element={<Cbs />} />
          <Route exaxt path="/callus" element={<Callus />} />
          <Route exaxt path="/callus-2" element={<Callus2 />} />
          <Route exaxt path="/callus-3" element={<Callus3 />} />
          <Route exaxt path="/wader" element={<Wader />} />
          <Route exaxt path="/graphic-design" element={<GraphicDesign />} />
          <Route exaxt path="/graphic-design-2" element={<GraphicDesign2 />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
