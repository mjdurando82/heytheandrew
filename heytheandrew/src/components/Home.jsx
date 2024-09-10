import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative bg-heytheandrew bg-top w-full h-[250vh] bg-cover bg-scroll">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none"></div>
      
      {/* CALLUS Button */}
      <div className="absolute" style={{ top: '74%', left: '25%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
        <div className="w-[10vw] h-[5vh] bg-red-500 opacity-0 cursor-pointer py-9">
          <Link to="/callus" className="block h-full w-full flex items-center justify-center text-white">
            CALLUS
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
    </div>
  )
}

export default Home
