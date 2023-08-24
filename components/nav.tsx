'use client';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from "react";
import LoginButton from './login';
import { getAuth, signOut } from 'firebase/auth';
import firebase_app from '../utils/Google/firebase/config';

const auth = getAuth(firebase_app);

export default function Nav() {
  const Navref = useRef();
  const [navbar, setNavbar] = useState(false);
  const handleClickOutside = () => {
    setNavbar(false)
  }
  const handleClickInside = () => {
    setNavbar(!navbar)
  }
  useOnClickOutside(Navref, handleClickOutside)
  return (
      <nav className="fixed w-full z-50 md:px-5 pt-16 mx-auto">
        <div className="flex flex-col md:flex-row justify-center mx-auto">
          <div className="flex flex-row">
            <div className="flex flex-row-reverse items-center justify-between md:block">
              <div className="z-10 md:hidden mr-auto relative">
                <button
                  className="pr-2 mr-2 pl-2 
                 outline-none focus:border"
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
          <div>
            <div ref={Navref} className={`flex-1 md:mx-aut0 content-center items-center bg-white md:bg-transparent dark:md:bg-transparent justify-center md:block ${navbar ? 'sticky' : 'hidden'}`}>
              <div className={`${navbar ? 'sticky' : 'hidden'} mx-auto content-center justify-center text-center`}>
              <Link href={"/"} onClick={() => setNavbar(false)}>SayHeySounds</Link></div>
              <LoginButton/>
              <ul  className="text-center flex flex-col md:flex-row gap-10">
                <li 
                className="font-black text-xl">
                  <Link href="/" onClick={() => setNavbar(false)}>
                  Home
                  </Link>
                </li>
                <li 
                className="font-black text-xl">
                  <Link href="/about" onClick={() => setNavbar(false)}>
                  About
                  </Link>
                </li>
                <li 
                className="font-black text-xl">
                  <Link href="/artists" onClick={() => setNavbar(false)}>
                  Our Roster
                  </Link>
                </li>
                <li 
                className="font-black text-xl">
                  <Link href="/sync" onClick={() => setNavbar(false)}>
                  Sync Placements
                  </Link>
                </li>
                <li 
                className="font-black text-xl">
                  <Link href="/submissions" onClick={() => setNavbar(false)}>
                  Artist Submissions
                  </Link>
                </li>
              </ul>
          </div>
          </div></div>
      </nav>
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