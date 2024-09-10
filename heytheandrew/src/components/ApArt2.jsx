import { Link } from "react-router-dom"

const ApArt2 = () => {
  return (
    <div className='bg-apArt2 w-full h-screen bg-contain bg-center bg-no-repeat relative'>
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
            c
          >
            <div className="w-[13vw] h-[1vh] bg-red-500 opacity-0 cursor-pointer py-6 w-40">
              <Link to="/ap=art2" className="block h-full w-full flex items-center justify-center text-white">
                Next Page
              </Link>
            </div>
          </div>
          <div className="absolute max-w-60" style={{ bottom: '5%', right: '9%' }}>
            <p className="text-sm text-center">
            Each of these photos were taken by Abby Kirsten.
            <br />
            See her other work 
            <Link className="text-red-500 hover:text-red-800" to=""> here.</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApArt2