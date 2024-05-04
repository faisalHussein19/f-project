"use client"
import ServicItem26 from "./Batteries";
import ServicItem25 from "./Brakes";
import ServicItem22 from "./car_wash";
import ServicItem23 from "./Motion vector";
import ServicItem from "./EngineOil";
import ServicItem24 from "./Tires";
import SectionHeaders from "./SectionHeaders";
import SectionHeaders2 from "./SectionHeaders2";
import { useEffect, useState } from "react";
import Image from "next/image";



export default function HomeServic() {

  return (
    //       <section className=" ">

    //           <div className=" absolute left-0 right-0 w-full justify-start">
    //               <div className=" h-48 w-48 absolute  -left-2 text-left">
    //                   <img src="/image/pic2r.png" alt="" className='' />
    //               </div>

    //           </div>
    //           <div>
    //               <div className=" h-48  w-48 absolute -right-14">
    //                   <img src="/image/pic2r.png" alt="" className='' />
    //               </div>

    //           </div>
    //           <div className=" text-center">
    //               <SectionHeaders
    //                   subHeader={'Cheeck out'}
    //                   mainHeader={'Services'} />
    //           </div>

    //           <section>
    //               dslvjsdv
    //           </section>


    //           <div className=" grid grid-cols-4 gap-4 mt-8">

    //               <ServicItem />
    //               <ServicItem22 />
    //               <ServicItem25 />
    //               <ServicItem24 />
    //               <ServicItem23 />
    //               <ServicItem26 />


    //           </div>

    //           <section className=" text-center my-16">
    //               <SectionHeaders subHeader={'Our Story'}
    //                   mainHeader={'About us'} />

    //               <div>
    //                   vlsvhlsv
    //               </div>
    //           </section>

    //           <section className=" text-center my-16">
    //               <SectionHeaders subHeader={'Our Story'}
    //                   mainHeader={'Contact'} />

    //           </section>



    //       </section>
    //   )
    // };

    <section className="">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-2 -top-[70px] text-left -z-1 mt-12 ">
          <Image src={'/image/pic2r.png'} width={148} height={148} alt={''} />
        </div>
        <div className="absolute -top-[100px] right-2 -z-1 mt-20">
          <Image src={'/image/pic2.png'} width={148} height={148} alt={''} />
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeaders
          subHeader={'check out'}
          mainHeader={'Services'} />
      </div>
      <div className="grid grid-cols-4 gap-4 mt-15">
        <ServicItem />
        <ServicItem22 />
        <ServicItem25 />
        <ServicItem24 />
        <ServicItem23 />
        <ServicItem26 />
      </div>
    <section className=" text-center my-16">
        <SectionHeaders subHeader={'Our Story'}
          mainHeader={'About us'} />

        <div>
          vlsvhlsv
        </div>
      </section>

      <section className=" text-center my-16">
        <SectionHeaders subHeader={'Our Story'}
          mainHeader={'Contact'} />

      </section>

    </section>

  );
}