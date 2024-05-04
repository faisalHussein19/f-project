"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import ShoppingCart from "./icons/ShoppingCart";

const Header = () => {
  const { data: session }: any = useSession();
  return (
    <header>
      <div className="flex flex-row items-center justify-between m-5">
        <nav className="flex items-center gap-6 text-gray-500 font-semibold">
          <Link className="text-red-680 font-semibold text-2xl " href="/">
            <img src="/image/logo2.png" alt="" width={'70'} />
          </Link>
          <Link href={'/'}>Home</Link>
          <Link href={'/menu'}>Services</Link>
          <Link href={'/#about'}>About</Link>
          <Link href={'/#contact'}>Contact</Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-500 font-semibold">
          {!session ? (
            <>
              <Link href="/login" className="">
                Login
              </Link>
              <Link href="/register" className="login rounded-full px-8 py-2">
                Register
              </Link>
            </>
          ) : (
            <>
              
              
                <button
                  onClick={() => {
                    signOut();
                  }}
                  className="p-2 px-5 -mt-1  bg-white rounded-full"
                >
                  Logout
                </button>
              
            </>
          )}
          <Link href={'/cart'} className="relative">
            <ShoppingCart />
          </Link>
        </nav>
      </div>
      
    </header>
  );
};

export default Header;




