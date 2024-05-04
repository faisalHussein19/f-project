import Link from "next/link";

export default function ServicItem24() {
    return (
        <div>
            <div className="card bg-gray-200   p-4 rounded-lg text-center  ">
                <img src="/image/Tires1.png" alt="pic1" />
                <h4 className=" font-semibold text-xl my-5 ">Tires</h4>
                <p className=" text-gray-500 text-sm  " >
                The role of tires in the form of car performance cannot be underestimated,
                 as they are the element connected to the ground.
                  
                    </p>
                <nav className="mt-4">
                    <Link className=" mt-4 bg-red-600  text-white rounded-full px-8 py-1.5" href={'/TiresSelector'}>Press here</Link>
                    {/* <button className=" mt-4 bg-red-600  text-white rounded-full px-8 py-1.5" >Press here</button> */}

                </nav>



            </div>
        </div>

        

    );
}