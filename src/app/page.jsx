import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import { Mina } from "next/font/google";
import HomeServic from "@/components/Home_Servic";
import Right from "../components/icons/Right";
import { CiCircleChevRight } from "react-icons/ci";
import SectionHeaders from "@/components/SectionHeaders";
import SectionHeaders2 from "@/components/SectionHeaders2";



export default function Home() {
  return(
    <>
      <Hero />
      <HomeServic />
      
    </>
    );
}




