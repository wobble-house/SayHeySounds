'use client';
import ImageHandler from "../../components/image-handler";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import {ArtistDetailsCard} from "../../components/details-card";
import { animationList, dropIn, animationItem } from "@/utils/animation/animation";
import { useOnClickOutside } from "../click-handler";

export function ArtistList({data}){
  return(
        <div className="flex flex-col relative">
          <motion.ul
            layout
            initial="hidden"
            whileInView="visible"
            variants={animationList}
            viewport={{ once: false }}
            className="flex flex-wrap gap-2 mx-auto text-center place-content-center z-30 relative"
            >
              {data.map(docs => (
                <ArtistCard 
                  key={docs.id} 
                  backgroundImage={docs.backgroundImage}
                  bio={docs.bio}
                  link={docs.link}
                  name={docs.name}
                  profileImage={docs.profileImage}
                  status={docs.status}
                />
              ))}
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
 if (isModalOpen) return (
<motion.li
    layout
    key={name} 
    variants={animationItem}
    id="" 
    className="fixed top-0 left-0 w-full h-full grow max-h-screen z-50 mx-auto place-content-center overflow-hidden overscroll-none bg-black"
    >
      <div className="flex artist-card justify-center items-center mx-auto overscroll-none mt-20">
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
                  <ArtistDetailsCard
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
    variants={animationItem}
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
                    <div className="flex content-center justify-center relative shadow-3xl ">
                    <div className="relative justify-start w-full">
                <div className="absolute px-2 z-30">
                        <h2 className="text-xl uppercase font-bold text-left text-white">{name}</h2>
                  </div>
                <div className="flex bg-zinc-50 relative w-48 h-32">
                  <ImageHandler src={backgroundImage.src} alt={backgroundImage.alt} fallbackSrc={'/images/oof.png'} height={768} width={1024} priority />
                </div>

                </div>
                </div>
              </motion.button>
              </motion.li>
                )
              }
