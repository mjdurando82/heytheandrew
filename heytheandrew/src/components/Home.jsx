import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative bg-heytheandrew bg-top w-full h-[250vh] bg-cover bg-scroll">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none"></div>
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <div
            className="absolute"
            style={{
              top: '74%', // Adjust these values
              left: '25%', // Adjust these values
              transform: 'translate(-54%, -50%)',
            }}
          >
            <div className="w-[10vw] h-[5vh] bg-red-500 opacity-0 cursor-pointer py-9 w-40">
              <Link to="/callus" className="block h-full w-full flex items-center justify-center text-white">
                CALLUS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
