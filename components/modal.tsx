'use client';

import React from "react"
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function MyModal ({children}) {
    const ref = useRef();
    const [isModalOpen, setModalOpen] = useState(false)
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    useOnClickOutside(ref, () => setModalOpen(false));
    const dropIn = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 40,
                stiffness: 300,
            }
        },
        exit: {
            y:"-100vh",
            opacity: 0,
        },
    };

    return (
        <>
            <div className=" flex fixed bottom-20 right-10 w-14 h-14 bg-rosspurple dark:bg-rossdarkpurple border-4 border-rossblue dark:border-rossdarkblue z-[99]">
            {isModalOpen ? (
                <motion.div
                ref={ref}
                onClick={(e) => e.stopPropagation()}
                className="flex fixed bg-rossblue dark:bg-rossdarkblue border-rosspurple dark:border-rossdarkpurple p-5 right-0 shadow-2xl bottom-32 md:right-24 max-w-xl border-r-4 border-b-4 overflow-hidden"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                >
                {children}
                </motion.div>
                 ) : (
                <motion.button 
                whileTap={{scale: 0.95}}
                className="save-button"
                onClick={!isModalOpen ? open : close }>
                <h2 className="animate-pulse text-5xl ml-2 -mt-3 hover:text-black text-white text-center hover:scale-105">   ?   </h2>
            </motion.button>
                )}
            </div>
     </>
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
      



