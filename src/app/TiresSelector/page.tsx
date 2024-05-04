import MotionVectorSelector from "@/components/MotionVectorSelector1"
import TiresSelector1 from "@/components/TiresSelector1"
import TiresSelector2 from "@/components/TiresSelector2"
import TiresSelector3 from "@/components/TiresSelector3"
import Link from "next/link"
import { FaRegArrowAltCircleRight } from "react-icons/fa"

const TiresSelector_fowlo_Tirs = () => {
    return (
        <section className=' min-h-screen px-3 grid place-items-center selection:text-white selection:bg-teal-500 bg-gradient-to-r
     from-teal-400 to-teal-500'>
            <div>
                <h2 className=' text-2xl font-bold text-teal-900'>
                Please enter vehicle information
                </h2>
                <br />
                <div className='flex flex-wrap gap-3 bg-teal-300 rounded-lg p-8'>
                    <div>
                        <p className="text-teal-800 font-semibold">Rim size :</p>
                    <TiresSelector1 />
                    </div>
                    <div>
                        <p className="text-teal-800 font-semibold">Tire size :</p>
                    <TiresSelector2/>
                    </div>
                    <div>
                        <p className="text-teal-800 font-semibold">Manufacturer company :</p>
                    <TiresSelector3/>
                    </div>

                </div>
                
            </div>
            <div className="  text-center  bg-teal-300 rounded-lg p-8">
                <p className="m-2 text-teal-800 font-semibold">To view workshops and prices :</p>
              <Link className="card butonpage bg-white justify-center items-center uppercase flex gap-2  py-2 rounded-full" href={'/follwmo'}>
                Press here
                <FaRegArrowAltCircleRight />
              </Link>
            </div>
        </section>
        
    )
}

export default TiresSelector_fowlo_Tirs