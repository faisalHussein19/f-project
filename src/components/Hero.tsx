import Right from './icons/Right'
import { CiCircleChevRight } from "react-icons/ci";
import { FaRegArrowAltCircleRight } from "react-icons/fa";


export default function Hero() {
    return (
        <section className='hero mt-4'>
            <div className=' py-12'>
            <h1 className='text-4xl font-semibold leading-16'>
            My Car Maintenance
            </h1>
            <p className='my-4 text-gray-500  font-semibold '>
            Welcome to my car maintenance website. We have all car maintenance services  
            for services .
            </p>
            <div className='flex gap-4 borde border-none text-gray-500 text-sm w-full  '>
                <button className='butoonclick  justify-center items-center uppercase flex gap-2 px-5 py-1.5 rounded-full font-semibold'>
                    Press here
                    <FaRegArrowAltCircleRight />


                    
                </button>
                <button className=" flex gap-2  py-2  border-none items-center font-semibold text-gray-500 " >
                    Learn more 
                    <FaRegArrowAltCircleRight />


                    
                    
                </button>
            </div>
            </div>
            <div className="w-80 h-80 relative  ">
            <img src="/image/pic3.png" alt="" className='w-full h-max'  />
            </div>
        </section>
    );
}