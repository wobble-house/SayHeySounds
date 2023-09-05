'use client';
import { useInView } from "framer-motion";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { animationItem, dropIn, swapItem, swapDropIn, swapDropOut } from "@/utils/animation/animation";
import { useOnClickOutside } from "./click-handler";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Section({ children }) {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false });
    return (
      <motion.section layout className="overscroll-auto sticky-top-0 snap-center" ref={sectionRef}>
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
                {children}
                </div>
              </motion.button>
</motion.section>
</AnimatePresence>
  );
}

export function SectionSwap2() {
  const [section1, setSection1] = useState(false);
  const [section2, setSection2] = useState(false);
  const [section3, setSection3] = useState(true);
  return (
<><Section><div className={`flex transition ease-in-out delay-150 mx-auto flex-col items-center min-h-screen h-full w-full justify-center  ${!section1 ? "bg-[#a6d7aa] dark:bg-[#4e6950]" : "bg-[#687fcc] dark:bg-[#37446e]"}`}>
              <div className={`flex ${!section1 ? "flex-row": "flex-row-reverse"} mx-auto`}>
                <div className="flex place-items-center w-96 rounded-r-full dark:rounded-l-full dark:rounded-r-none overflow-hidden shadow-2xl">
                  <Image
                    className="relative"
                    src="/images/studio.jpg"
                    alt="SayHeySounds Studio"
                    width={1330}
                    height={1330}
                    priority
                  />
                </div>
                <div className="flex flex-col gap-5 justify-center mx-auto content-center w-96">
                  <div className="flex flex-col">
                    <h2 className="text-2xl font-bold uppercase text-center">Header Text</h2>
                    <h3 className="text-lg font-normal text-center">Sub Text</h3>
                  </div>
                  <button className={`btn transition ease-in-out delay-150 ${!section1 ? "bg-[#b8ceba] dark:bg-[#718473]" : "bg-[#a4aed0] dark:bg-[#53596e]"} rounded-3xl shadow-xl px-4 mx-auto hover:scale-[1.02]`}
                  onClick={() => setSection1(!section1)}>Click Me</button>
                </div>
                <div className="flex place-items-center w-96">
                  <Image
                    className="relative"
                    src="/logos/sayheysoundslogo.webp"
                    alt="SayHeySounds Studio"
                    width={1330}
                    height={1330}
                    priority
                  />
                </div>
              </div>
            </div>
            </Section>
            <Section> 
            <div className={`flex transition ease-in-out delay-150 mx-auto flex-col items-center min-h-screen h-full w-full justify-center ${!section2 ? "bg-[#687fcc] dark:bg-[#37446e]" : "dark:bg-[#34001a] bg-[#a70054]"}`}>
            <div className={`flex ${!section2 ? "flex-row": "flex-row-reverse"} mx-auto`}>
                  <div className="flex place-items-center w-96 rounded-r-full dark:rounded-l-full dark:rounded-r-none overflow-hidden shadow-xl">
                    <Image
                      className="relative"
                      src="/images/studio.jpg"
                      alt="SayHeySounds Studio"
                      width={1330}
                      height={1330}
                      priority
                    />
                  </div>
                  <div className="flex flex-col gap-5 justify-center mx-auto content-center w-96">
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold uppercase text-center">Header Text</h2>
                        <h3 className="text-lg font-normal text-center">Sub Text</h3>
                    </div>
                    <button className={`btn transition ease-in-out delay-150 ${!section2 ? "bg-[#a4aed0] dark:bg-[#53596e]" : "bg-[#a96a89] dark:bg-[#71465b]"} rounded-3xl shadow-xl px-4 mx-auto`}
                    onClick={()=> setSection2(!section2)}>click me</button>
                  </div>
                  <div className="flex place-items-center w-96">
                    <Image
                      className="relative"
                      src="/logos/sayheysoundslogo.webp"
                      alt="SayHeySounds Studio"
                      width={1330}
                      height={1330}
                      priority
                    />
                  </div>
                </div>
              </div>
              </Section>
              <Section> 
              <div className={`flex mx-auto transition ease-in-out delay-150 flex-col items-center min-h-screen h-full w-full justify-center 
              ${!section3 ? "" : "bg-[#a6d7aa] dark:bg-[#4e6950]"} 
              ${!section2 ? "" : "bg-[#687fcc] dark:bg-[#37446e]"}
              ${!section1 ? "" : "dark:bg-[#34001a] bg-[#a70054]"}`}>
                <div className={`flex ${!section3 ? "flex-row": "flex-row-reverse"} mx-auto`}>
                  <div className="flex place-items-center w-96 rounded-r-full dark:rounded-l-full dark:rounded-r-none overflow-hidden shadow-xl">
                    <Image
                      className="relative"
                      src="/images/studio.jpg"
                      alt="SayHeySounds Studio"
                      width={1330}
                      height={1330}
                      priority
                    />
                  </div>
                <div className="flex flex-col gap-5 justify-center mx-auto content-center w-96">
                  <div className="flex flex-col">
                      <h2 className="text-2xl font-bold uppercase text-center">Header Text</h2>
                      <h3 className="text-lg font-normal text-center">Sub Text</h3>
                  </div>
                  <div className="flex flex-row">
                  <button className={`btn  
                  ${!section3 ? "" : "bg-[#b8ceba] dark:bg-[#718473]"} 
                  ${!section2 ? "" : "bg-[#a4aed0] dark:bg-[#53596e]"}
                  ${!section1 ? "" : "dark:bg-[#a96a89] bg-[#71465b]"}
               rounded-3xl shadow-xl px-4 mx-auto`}
                  onClick={()=> {
                    setSection1(true)
                    setSection2(null)
                    setSection3(null)
                  }
      }>Red</button>

                  <button className={` btn 
                  ${!section3 ? "" : "bg-[#b8ceba] dark:bg-[#718473]"} 
                  ${!section2 ? "" : "bg-[#a4aed0] dark:bg-[#53596e]"}
                  ${!section1 ? "" : "dark:bg-[#a96a89] bg-[#71465b]"} 
                  transition rounded-3xl shadow-xl px-4 mx-auto`}
                                    onClick={()=> {
                                      setSection1(null)
                                      setSection2(true)
                                      setSection3(null)
                                    }}>Blue</button>

                  <button className={` btn 
                  ${!section3 ? "" : "bg-[#b8ceba] dark:bg-[#718473]"} 
                  ${!section2 ? "" : "bg-[#a4aed0] dark:bg-[#53596e]"}
                  ${!section1 ? "" : "dark:bg-[#a96a89] bg-[#71465b]"} transition ease-in-out delay-15 rounded-3xl shadow-xl px-4 mx-auto`}
                                    onClick={()=> {
                                      setSection1(null)
                                      setSection2(null)
                                      setSection3(true)
                                    }}>Green</button>
                </div>
               
                </div>
                <div className="flex place-items-center w-96">
                    <Image
                      className="relative"
                      src="/logos/sayheysoundslogo.webp"
                      alt="SayHeySounds Studio"
                      width={1330}
                      height={1330}
                      priority
                    />
                  </div>
                </div>
              </div>
              </Section>
              </>
  );
}