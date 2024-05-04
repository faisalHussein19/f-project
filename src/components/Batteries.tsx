import Link from "next/link";

export default function ServicItem26() {
    return (
        <div>
            <div className="card bg-gray-200 p-5 px-7  rounded-lg text-center ">
                <img src="/image/picBatteries.png" alt="pic1" />
                <h4 className=" font-semibold text-xl my-3">Batteries</h4>
                <p className=" text-gray-500 text-sm" >
                The car battery is a type of rechargeable battery that operates the electric motor
                    </p>
                <nav className="mt-4">
                    <Link className=" mt-4 bg-red-600  text-white rounded-full px-5 py-1.5" href={'/BatteriesSelector'}>Press here</Link>
                    {/* <button className=" mt-4 bg-red-600  text-white rounded-full px-8 py-1.5" >Press here</button> */}

                </nav>



            </div>
        </div>

        

    );
}