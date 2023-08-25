'use client';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from "react";

export default function Nav({children}) {
  const Navref = useRef();
  const [navbar, setNavbar] = useState(false);
  const handleClickOutside = () => {
    setNavbar(false)
  }
  useOnClickOutside(Navref, handleClickOutside)
  return (
      <div className="fixed w-full z-50 px-5 mx-auto">
        <div className="flex flex-col md:flex-row justify-center mx-auto">
          <div className="flex flex-row">
            <div className="flex flex-row-reverse items-center justify-between md:block">
              <div className="z-10 md:hidden mr-auto relative">
                <button
                  className="bg-white dark:bg-black pr-2 mr-2 pl-2 mt-5
                 border-2 rounded-md border-black focus:border-2 focus:animate-pulse"
                 onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 border-solid border-1
                      "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 border-solid border-1
                      "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
            <div ref={Navref} className={`flex h-full z-20 md:mx-auto content-center items-center bg-white dark:bg-black md:bg-transparent dark:md:bg-transparent justify-center md:block ${navbar ? 'sticky' : 'hidden'}`}>
              <ul  className="text-center flex flex-col md:flex-row gap-10">
                <li 
                className="font-black text-xl">
                  <Link href="/" onClick={() => setNavbar(false)} prefetch={false}>
                  Home
                  </Link>
                </li>
                <li 
                className="font-black text-xl">
                  <Link href="/about" onClick={() => setNavbar(false)} prefetch={false}>
                  About
                  </Link>
                </li>
                <li 
                className="font-black text-xl">
                  <Link href="/artists" onClick={() => setNavbar(false)} prefetch={false}>
                  Our Roster
                  </Link>
                </li>
                <li 
                className="font-black text-xl">
                  <Link href="/sync" onClick={() => setNavbar(false)} prefetch={false}>
                  Sync Placements
                  </Link>
                </li>
                <li 
                className="font-black text-xl">
                  <Link href="/submissions" onClick={() => setNavbar(false)} prefetch={false}>
                  Artist Submissions
                  </Link>
                </li>
                {children}
              </ul>
          </div>
          </div>
          </div>
          
  );
};

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    [ref, handler]
  );
}