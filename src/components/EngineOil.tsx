import Link from "next/link";

export default function ServicItem() {
    return (
        <div>
            <div className="card bg-gray-200 p-4  rounded-lg text-center ">
                <img src="/image/pic1.png" alt="pic1" />
                <h4 className=" font-semibold text-xl my-3">Engine oil</h4>
                <p className=" text-gray-500 text-sm" >
                    Engine oil reduces the friction of engine parts during internal combustion while cleaning, preventing wear,
                    and improving engine performance and cooling.
                    </p>
                <nav className="mt-4">
                    <Link className=" mt-4 bg-red-600  text-white rounded-full px-8 py-1.5" href={'/engineoilSelector'}>Press here</Link>
                    {/* <button onClick={} className=" mt-4 bg-red-600  text-white rounded-full px-8 py-1.5" >Press here</button> */}

                </nav>



            </div>
        </div>

        

    );
}


{/* <div className="content">
            <div className="card">
                <div className="icon">
                    <div>
                        <img src="/image/pic1.png" alt="pic1" />
                    </div>

                </div>
                <div className="card">
                    <div className="icon">
                        <div>
                            <img src="/image/pic1.png" alt="pic1" />
                        </div>

                    </div>

                </div>

            </div>
        </div> */}


// <div className="content">
//     <div className=" bg-gray-200 p-4  rounded-lg text-center">
//         <img src="/image/pic1.png" alt="pic1" />
//         <h4 className=" font-semibold text-xl my-3">Engine oil change</h4>
//         <p className=" text-gray-500 text-sm ">
//             Engine oil reduces the friction of engine parts during internal combustion while cleaning, preventing wear,
//             and improving engine performance and cooling.

//         </p>
//         <button className=" bg-red-600 text-white rounded-full mt-4 px-8 py-2">Press here</button>
//     </div>
// </div>


// <div className="content">
//     <div className="card">
//         <div className="icon">
//             <img src="/image/pic1.png" alt="pic1" />
//         <div/>
//     <div/>

// </div>




{/* <h3>Live For Speed</h3>
                    <p>
                        Server Ip :
                        0.0.0.0 <br>
                            Server Port :
                            2023 <br>
                                Version :
                                6H , 6U
                            </p> */}
