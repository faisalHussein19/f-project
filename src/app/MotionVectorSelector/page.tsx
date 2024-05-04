import MotionVectorSelector1 from "@/components/MotionVectorSelector1"
import MotionVectorSelector2 from "@/components/MotionVectorSelector2"
import Link from "next/link"
import { FaRegArrowAltCircleRight } from "react-icons/fa"

const engineoil = () => {
    return (
        <section className='min-h-screen px-3 grid place-items-center selection:text-white selection:bg-teal-500 bg-gradient-to-r
     from-teal-400 to-teal-500'>
            <div>
                <h2 className=' text-2xl font-bold text-teal-900'>
                Please enter vehicle information
                </h2>
                <br />
                <div className='flex flex-wrap gap-3 bg-teal-300 rounded-lg p-8'>
                    <div>
                        <p className="text-teal-800 font-semibold">Viscosity :</p>
                    <MotionVectorSelector1 />
                    </div>
                    <div>
                        <p className="text-teal-800 font-semibold">Engine size :</p>
                    <MotionVectorSelector2/>
                    </div>
                    <div>
                        <p className="text-teal-800 font-semibold">Manufacturer company :</p>
                    <MotionVectorSelector1/>
                    </div>

                </div>
                
            </div>
            <div className="  text-center  bg-teal-300 rounded-lg p-8">
                <p className="m-2 text-teal-800 font-semibold">To view workshops and prices :</p>
              <Link className="butonpage bg-white justify-center items-center uppercase flex gap-2  py-2 rounded-full" href={'/follwmo'}>
                Press here
                <FaRegArrowAltCircleRight />
              </Link>
            </div>
        </section>
        
    )
}

export default engineoil