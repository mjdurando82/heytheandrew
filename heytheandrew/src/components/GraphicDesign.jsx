import { Link } from "react-router-dom"

const GraphicDesign = () => {
  return (
    <div className='bg-graphicDesign w-full h-screen bg-contain bg-center bg-no-repeat relative'>
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
      {/* CLICK HERE Button*/}
      <div className="absolute" style={{ top: '81%', left: '27%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
        <div className="w-[10vw] h-[5vh] bg-red-500 opacity-0 cursor-pointer py-9">
          <Link to="https://docs.google.com/presentation/d/1Do41z9IMdx099aDuKmkiHwbtQ0jdRv40BmQNxhvh4tU/edit#slide=id.p" target="_blank" className="block h-full w-full flex items-center justify-center text-white">
            CLICK HERE
          </Link>
        </div>
      </div>

          <div
            className="absolute"
            style={{
              bottom: '0%', // Adjust these values
              right: '1%', // Adjust these values
              transform: 'translate(-50%, -20%)',
            }}
          >
            <div className="w-[13vw] h-[1vh] bg-red-500 opacity-0 cursor-pointer py-6 w-40">
              <Link to="/graphic-design-2" className="block h-full w-full flex items-center justify-center text-white">
                Next Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GraphicDesign
