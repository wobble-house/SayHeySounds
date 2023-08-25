'use client';
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

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
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
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
<motion.section layout className="overscroll-auto sticky-top-0 py-10" ref={headerRef}>
        <motion.div
        layout
        initial={false}
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          {children}
        </motion.div>
      </motion.section>
  )
}