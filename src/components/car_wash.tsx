import Link from "next/link";



export default function ServicItem22() {
    return (
        <div>
            <div className="card bg-gray-200   p-4 rounded-lg text-center  ">
                <img src="/image/piccarwash.png" alt="pic1" />
                <h4 className=" font-semibold text-xl my-3 ">Car Wash</h4>
                <p className=" text-gray-500 text-sm" >
                Car washing removes dirt and impurities that accumulate on the exterior and interior of the car
                Such as dust, mud, insects, resin and rust. It also helps remove stains and odors
                    </p>
                <nav className="mt-4">
                    <Link className=" mt-4 bg-red-600  text-white rounded-full px-8 py-1.5" href={'/CarwashSelector'}>Press here</Link>
                    {/* <button className=" mt-4 bg-red-600  text-white rounded-full px-8 py-1.5" >Press here</button> */}

                </nav>



            </div>
        </div>

        

    );
}