'use client';
import { useInView } from "framer-motion";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { animationItem, dropIn, swapItem, swapDropIn, swapDropOut } from "@/utils/animation/animation";
import { useOnClickOutside } from "./click-handler";
import { AnimatePresence } from "framer-motion";

export default function Section({ children }) {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false });
    return (
      <motion.section layout className="overscroll-auto sticky-top-0" ref={sectionRef}>
        <motion.div
        layout
        initial={false}
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
          }}
        >
          {children}
        </motion.div>
      </motion.section>
    );
  }

  export function LoadingSection({ children }) {
    const LoadingSectionRef = useRef(null);
    const isInView = useInView(LoadingSectionRef, { once: false });
  
    return (
      <motion.section layout className="overscroll-auto sticky-top-0" ref={LoadingSectionRef}>
        <motion.div
        layout
        initial={false}
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
          }}
        >
          {children}
        </motion.div>
      </motion.section>
    );
  }

export function Spacer(){
  const spacerRef = useRef(null);
  const isInView = useInView(spacerRef, { margin: "0px 0px 0px 0px", once: false });
  return (
<motion.section layout className="overscroll-auto py-64 mx-auto" ref={spacerRef} >
        <motion.div
        layout
        initial={true}
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          className="flex mx-auto justify-center text-center"
        >
          <div className="animate-bounce bg-rosspurple dark:bg-rossdarkpurple pr-1 pb-1 -mt-1">
      <div className="bg-rossblue dark:bg-rossdarkblue pr-1 pb-1 -ml-1 -mt-2 pt-1">
      <div ref={spacerRef} className="bg-rosspurple dark:bg-rossdarkpurple p-1 -ml-1 -mt-2 text-white">
        <FontAwesomeIcon icon={faArrowDown} size="xl"/>
        </div>
        </div>
      </div>
        </motion.div>
      </motion.section>
  )
}

export function Header({children}){
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: false });
  return (
<motion.section layout className="overscroll-auto sticky-top-0" ref={headerRef}>
        <motion.div
        layout
        initial={false}
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
          }}
        >
          {children}
        </motion.div>
      </motion.section>
  )
}

export function SectionSwap({children}) {
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false)
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  useOnClickOutside(ref, () => setModalOpen(false));
  const sectionSwapRef = useRef(null);
  const isInView = useInView(sectionSwapRef, { once: false });
  if (isModalOpen) return (
    <AnimatePresence>
    <motion.section layout className={`flex overscroll-auto h-full`} ref={sectionSwapRef}>

      <div className={`flex justify-center items-center ${isModalOpen ? "w-full" : "max-w-4xl"} overscroll-none`}>
      <motion.button 
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={swapDropOut}
                layout
                onClick={!isModalOpen ? open : close }>
                <div className="flex w-full" ref={ref}>
                  {children}
                    </div>
                </motion.button>
                </div>
                </motion.section>
                </AnimatePresence>
                )
else return (
  <AnimatePresence initial={false}>
  <motion.section layout className="flex justify-center overscroll-auto mx-auto bg-transparent" ref={sectionSwapRef}>
                <motion.button 
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={swapDropIn}
                layout
                onClick={!isModalOpen ? open : close }>
                  <div className="min-h-screen">
                <h2>button</h2></div>
              </motion.button>
</motion.section>
</AnimatePresence>
  );
}