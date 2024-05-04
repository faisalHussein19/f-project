import BatteriesSelector1 from "@/components/BatteriesSelector1"
import BatteriesSelector2 from "@/components/BatteriesSelector2"
import BatteriesSelector3 from "@/components/BatteriesSelector3"
import Link from "next/link"
import { FaRegArrowAltCircleRight } from "react-icons/fa"

const BatteriesSelector11 = () => {
    return (
        <section className='min-h-screen px-3 grid place-items-center selection:text-white selection:bg-teal-500 bg-gradient-to-r
     from-teal-400 to-teal-500'>
            <div>
                <h2 className=' text-center text-2xl font-bold text-teal-900'>
                Please enter vehicle information
                </h2>
                <br />
                <div className='flex flex-wrap gap-3 bg-teal-300 rounded-lg p-8'>
                    <div>
                        <p className="text-teal-800 font-semibold">Battery Type:</p>
                    <BatteriesSelector1/>
                    </div>
                    <div>
                    <p className="text-teal-800 font-semibold">Battery size:</p>
                    <BatteriesSelector2/>
                    </div>
                    <div>
                        <p className="text-teal-800 font-semibold">the manufacture company :</p>
                    <BatteriesSelector3/>
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

export default BatteriesSelector11