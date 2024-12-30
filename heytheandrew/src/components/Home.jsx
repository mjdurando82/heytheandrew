import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative bg-heytheandrew bg-top w-full h-[250vh] bg-cover bg-scroll">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none"></div>

      {/* Callus Button*/}
      <div className="absolute" style={{ top: '73.7%', left: '24.5%', transform: 'translate(-50%, -45%)', zIndex: 10 }}>
        <div className="w-[10vw] h-[5vh] bg-red-500 opacity-0 cursor-pointer py-12">
          <Link to="/callus" className="block h-full w-full flex items-center justify-center text-white">
            CALLUS
          </Link>
        </div>
      </div>

      {/* CB's Button*/}
      <div className="absolute" style={{ top: '70.5%', left: '81.2%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
        <div className="w-[12vw] h-[5vh] bg-red-500 opacity-0 cursor-pointer py-9">
          <Link to="/cbs" className="block h-full w-full flex items-center justify-center text-white">
            CB's
          </Link>
        </div>
      </div>

      {/* AP ART PORTFOLIO Button */}
      <div className="absolute" style={{ top: '18%', right: '1%', transform: 'translate(-1%, -50%)', zIndex: 10 }}>
        <div className="w-[24vw] h-[32vh] bg-red-500 opacity-0 cursor-pointer py-9">
          <Link to="/ap-art" className="block h-full w-full flex items-center justify-center text-white">
            AP ART PORTFOLIO
          </Link>
        </div>
      </div>

      {/* GRAPHIC DESIGN BUTTON */}
      <div className="absolute" style={{ top: '5.8%', right: '17%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
        <div className="w-[18vw] h-[5vh] bg-red-500 opacity-0 cursor-pointer py-16">
          <Link to="/graphic-design" className="block h-full w-full flex items-center justify-center text-white">
            GRAPHIC DESIGN
          </Link>
        </div>
      </div>

      {/* WADER Button*/}
      <div className="absolute" style={{ top: '51%', right: '5%', transform: 'translate(-40%, -45%)', zIndex: 10 }}>
        <div className="w-[12vw] h-[16vh] bg-red-500 opacity-0 cursor-pointer py-9">
          <Link to="/wader" className="block h-full w-full flex items-center justify-center text-white">
            WADER
          </Link>
        </div>
      </div>
      
      {/* RESUME Button */}
      <div className="absolute" style={{ top: '42%', right: '40%', transform: 'translate(-10%, -50%)', zIndex: 10 }}>
        <div className="w-[16vw] h-[16vh] bg-red-500 opacity-0 cursor-pointer py-9">
          <Link to="https://docs.google.com/document/d/18xx9OdQV9t7Yq14PziDI-ZXuDQWLfrxcA2C8Nl5syow/edit?tab=t.0" target='_blank' className="block h-full w-full flex items-center justify-center text-white">
          RESUME
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
