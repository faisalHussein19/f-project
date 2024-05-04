
import Link from "next/link";


export default function ServicItem23() {
    return (
        <div>
            <div className="card bg-gray-200   p-4 rounded-lg text-center  ">
                <img src="/image/pic8ayr1.png" alt="pic1" />
                <h4 className=" font-semibold text-xl my-5 ">Oil Motion vector</h4>
                <p className=" text-gray-500 text-sm" >
                Power flows from the engine through the transmission before it enters the drive wheels.<br/>
                 The primary role of the transmission is to regulate the speed and torque of the drive wheels under various driving 
                </p>
                
                <nav className="mt-4">
                    <Link className=" mt-4 bg-red-600  text-white rounded-full px-5 py-1.5" href={'/mo'}>Press here</Link>
                    {/* <button className=" mt-4 bg-red-600  text-white rounded-full px-8 py-1.5" >Press here</button> */}

                </nav>

                

            </div>

        </div>
        
        

    );
}