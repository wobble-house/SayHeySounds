'use client';
import { motion } from "framer-motion"
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import ImageHandler from "./image-handler";

export default function Details({ 
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
    link: any,
    name: string,
    profileImage: {
        src: string,
        alt: string
    },
    status: string,
 }){
    const list = {
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
      };
    
      const item = {
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
      };

      const listitem = {
        visible: { 
          opacity: 1,
          y: 0,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
          },
        },
        hidden: { 
          opacity: 0,
          y: 200,
          transition: {
            when: "afterChildren",
          },
        },
      };
      return (
        <div className="flex flex-col relative px-4 max-w-sm md:max-w-2xl lg:max-w-6xl overscroll-contain bg-black">
            <motion.div 
                layout
                initial="hidden"
                animate="visible"
                variants={item} className="relative z-30">
                <h2 className=" relative text-white  text-left px-5 md:text-4xl">{name}</h2>
              </motion.div>
            <motion.div layout
                initial="hidden"
                animate="visible"
                variants={list}
                className="shadow-2xl block">
              <div className="flex flex-col gap-2 "> 
                    <div className="flex flex-col md:flex-row grow shrink gap-8 pb-5 align-middle">
                          <div className="m-3 max-w-sm">
                            <ImageHandler src={profileImage.src} alt={profileImage.alt} fallbackSrc={'/images/oof.png'} height={768} width={1024}/>
                          </div>
                        <div className="flex flex-col">
                        <div className="px-4 mr-auto">
                          <h2 className="text-left text-white whitespace-nowrap">{name}</h2>
                          </div>
                       
                        </div>
                      </div>
                      <div className="h-1 w-full"></div>
              <div className="mx-auto overflow-auto">
              <ReactMarkdown className="paragraph line-break list-inside text-left max-w-2xl text-white" remarkPlugins={[remarkGfm, remarkBreaks]}>
                {bio}
                </ReactMarkdown>
              </div>
              <div className="flex flex-row gap-10 mx-auto">
              <button className={` p-2 drop-shadow hover:scale-[1.01] text-white`}>
                <Link href={link} target="_blank" 
                rel="noopener noreferrer" className="">Visit the Site</Link>
                </button> 
              </div></div>
            </motion.div>
            </div>
    ) 
}
