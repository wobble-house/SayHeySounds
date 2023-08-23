'use client';
import ImageHandler from "../../components/image-handler";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Details from "../../components/details-card";

export function ArtistList({data}){
  const Artistlist = {
    visible: { 
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: { 
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  return(
          <div className="flex flex-col relative">
              <motion.ul
                layout
                initial="hidden"
                whileInView="visible"
                variants={Artistlist}
                viewport={{ once: false }}
                className="flex flex-wrap gap-5 mx-auto text-center place-content-center z-30 relative">
                 {data.map(docs => (
                    <ArtistCard 
                    key={docs.id} 
                    backgroundImage={docs.backgroundImage}
                    bio={docs.bio}
                    link={docs.link}
                    name={docs.name}
                    profileImage={docs.profileImage}
                    status={docs.status}/>
                 ))
                  }
              </motion.ul>
              </div>
  )
}

export function ArtistCard({ 
  backgroundImage,
  bio,
  link,
  name,
  profileImage,
  status
 }:{ 
    backgroundImage : {
        src: string,
        alt: string
    },
    bio: string,
    link: string,
    name: string,
    profileImage: {
        src: string,
        alt: string
    },
    status: string
 }){
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false)
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  useOnClickOutside(ref, () => setModalOpen(false));

  const dropIn = {
      hidden: {
          opacity: 0,
          scale: 0,
          transition: {
            duration: 3,
            type: "spring",
            damping: 40,
            stiffness: 300,
          },
      },
      visible: {
          opacity: 1,
          scale: 1,
          transition: {
              duration: 2,
              type: "spring",
              damping: 40,
              stiffness: 300,
          }
      },
      exit: {
          opacity: 0,
          scale:0
      },
  };
  const item = {
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
    hidden: { 
      opacity: 0,
      scale: 0,
      y:-100,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.4,
      },
    },
    exit: {
      opacity: 0,
  },
  }

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
 if (isModalOpen) return (
<motion.li
    layout
    key={name} 
    variants={item}
    id="" 
    className="fixed top-0 left-0 w-full h-full grow max-h-screen z-50 mx-auto place-content-center pt-20 overflow-hidden overscroll-none"
    >
      <div className="flex artist-card justify-center items-center mx-auto my-auto overscroll-none bg-black">
                  <motion.div
                  layout
                  className="grid grid-cols-0"
                  variants={dropIn}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  >
                    <button className="justify-self-end z-50 relative -mb-10 hover:scale-105">
      <span className="text-xl hover:animate-pulse p-3">x</span>
      </button>
                  <div ref={ref}>
                  <Details 
                    backgroundImage={backgroundImage}
                    bio={bio}
                    link={link}
                    name={name}
                    profileImage={profileImage}
                    status={status} />
                    </div>
                </motion.div>
                </div>
                </motion.li>
                )
else return (
  <motion.li
    layout
    key={name} 
    variants={item}
    id="artist-card" 
    className="flex-col artist-card hover:scale-105 relative grow shrink overscroll-none"
    >
                <motion.button 
                initial="visible"
                animate="hidden"
                exit="exit"
                layout
                whileTap={{scale: 0.95}}
                whileHover={{scale: 1.05}}
                className="save-button"
                onClick={!isModalOpen ? open : close }>
                    <div className="flex content-center justify-center w-full h-full relative shadow-3xl">
                    <div className="flex-col items-center content-center justify-center w-full h-full relative -ml-4 -mt-2 p-5 mb-2">
                          <div className="flex shrink bg-rosspurple dark:bg-rossdarkpurple  text-white px-2">
                        <h2 className="text-xl uppercase font-bold text-left">{name}</h2>
                  </div>
                <div className="flex bg-zinc-50 m-2 relative mt-3 w-48 h-32 mr-5">
                  <ImageHandler src={backgroundImage.src} alt={backgroundImage.alt} fallbackSrc={'/images/oof.png'} height={768} width={1024} />
                </div>
                </div>
                </div>
              </motion.button>
              </motion.li>
                )
              }
