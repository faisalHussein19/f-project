import Link from "next/link";

export default function ServicItem25() {
    return (
        <div>
            <div className="card bg-gray-200 p-4  rounded-lg text-center ">
                <img src="/image/brake2.png" alt="pic1" />
                <h4 className=" font-semibold text-xl my-3">Brakes</h4>
                <p className=" text-gray-500 text-sm" >
                Brakes slow the car down or completely stop it from moving, 
                according to the driver's desire and are the most important control elements in the car
                   
                    </p>
                <nav className="mt-4">
                    <Link className=" mt-4 bg-red-600  text-white rounded-full px-8 py-1.5" href={'/BrakesSelector'}>Press here</Link>
                    {/* <button className=" mt-4 bg-red-600  text-white rounded-full px-8 py-1.5" >Press here</button> */}

                </nav>



            </div>
        </div>

        

    );
}