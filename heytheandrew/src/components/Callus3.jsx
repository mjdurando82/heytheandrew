import { Link } from "react-router-dom"

const Callus3 = () => {
  return (
    <div className='bg-callus3 w-full h-screen bg-contain bg-center bg-no-repeat relative'>
      <div className="absolute inset-0 pointer-events-none">
      </div>
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <div
            className="absolute"
            style={{
              top: '5%', // Adjust these values
              left: '15%', // Adjust these values
              transform: 'translate(-53%, -50%)',
            }}
          >
            <div className="w-[13vw] h-[1vh] bg-red-500 opacity-0 cursor-pointer py-6 w-40">
              <Link to="/" className="block h-full w-full flex items-center justify-center text-white">
                BACK HOME
              </Link>
            </div>
          </div>
          <div
            className="absolute"
            style={{
              bottom: '0%', // Adjust these values
              right: '1%', // Adjust these values
              transform: 'translate(-53%, -50%)',
            }}
          >
          </div>
        </div>
      </div>
    </div>
  )
}

export default Callus3
