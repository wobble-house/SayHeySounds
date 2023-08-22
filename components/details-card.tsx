'use client';
import { motion } from "framer-motion"
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import ImageWithFallback from "./image-handler";

export default function Details({ 
  description,
  details,
  img, 
  title,
  url,
  urlvisit,
  git
}:{ 
  description: string, 
  details: string[],   
  img: { 
    src: string, 
    alt: string,
  },
  title: string, 
  url: string, 
  urlvisit: boolean,
  git: string,
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
      
  if (urlvisit == true) return (
        <div className="flex flex-col relative px-4 max-w-sm md:max-w-2xl lg:max-w-6xl overscroll-contain">
            <motion.div 
                layout
                initial="hidden"
                animate="visible"
                variants={item} className=" bg-rosspurple dark:bg-rossdarkpurple mr-auto -ml-4 -mb-2 relative z-30">
                <h2 className=" relative text-white  text-left px-5 md:text-4xl">{title}</h2>
              </motion.div>
            <motion.div layout
                initial="hidden"
                animate="visible"
                variants={list}
                className=" bg-rosspurple dark:bg-rossdarkpurple md:pr-2 pb-2 md:mb-12 shadow-2xl block">
              <div className="flex flex-col gap-2 bg-rossblue dark:bg-rossdarkblue -ml-2 -mt-2 pt-6 px-5 pb-6"> 
                    <div className="flex flex-col md:flex-row grow shrink gap-8 pb-5 align-middle">
                          <div className="m-3 max-w-sm">
                            <ImageWithFallback src={img.src} alt={img.alt} fallbackSrc={'/images/oof.png'} height={768} width={1024}/>
                          </div>
                        <div className="flex flex-col">
                        <div className="mt-4 bg-rosspurple dark:bg-rossdarkpurple px-4 mr-auto">
                          <h2 className="text-left text-white whitespace-nowrap">Tech Stack</h2>
                          </div>
                        <motion.ul 
                        layout
                        initial="hidden"
                        animate="visible"
                        variants={list} className="pl-8 text-left list-disc dark:text-white ">
                            {details.map((details, index ) => (
                                <motion.li
                                layout
                                initial="hidden"
                                animate="visible"
                                variants={listitem} 
                                key={index}
                                className="">
                                {details}
                            </motion.li> ))}
                        </motion.ul>
                        </div>
                      </div>
                      <div className="bg-rosspurple dark:bg-rossdarkpurple h-1 w-full"></div>
              <div className="mx-auto overflow-auto">
              <ReactMarkdown className="paragraph line-break list-inside text-left text-black dark:text-white max-w-2xl" remarkPlugins={[remarkGfm, remarkBreaks]}>
                {description}
                </ReactMarkdown>
              </div>
              <div className="flex flex-row gap-10 mx-auto">
              <button className={` p-2 drop-shadow hover:scale-[1.01] bg-rosspurple dark:bg-rossdarkpurple`}>
                <Link href={url} target="_blank" 
                rel="noopener noreferrer" className="text-white dark:text-white">Visit the Site</Link>
                </button> 
              {git ?  <button className={` p-2 drop-shadow hover:scale-[1.01] bg-rosspurple dark:bg-rossdarkpurple`}>
                <Link href={git} target="_blank" 
                rel="noopener noreferrer" className="text-white dark:text-white">Git Repository</Link>
                </button> : <></>}
              </div></div>
            </motion.div>
            </div>
    ) 
    else return (
      <div className="flex flex-col relative px-4 max-w-sm md:max-w-2xl lg:max-w-6xl overscroll-contain">
      <motion.div 
          layout
          initial="hidden"
          animate="visible"
          variants={item} className=" bg-rosspurple dark:bg-rossdarkpurple mr-auto -ml-4 -mb-2 relative z-30">
          <h2 className=" relative text-white  text-left px-5 md:text-4xl">{title}</h2>
        </motion.div>
      <motion.div layout
          initial="hidden"
          animate="visible"
          variants={list}
          className=" bg-rosspurple dark:bg-rossdarkpurple md:pr-2 pb-2 md:mb-12 shadow-2xl block">
        <div className="flex flex-col gap-2 bg-rossblue dark:bg-rossdarkblue -ml-2 -mt-2 pt-6 px-5 pb-6"> 
              <div className="flex flex-col md:flex-row grow shrink gap-8 pb-5 align-middle">
                    <div className="relative m-3 max-w-sm">
                      <ImageWithFallback src={img.src} alt={img.alt} fallbackSrc={'/images/oof.png'} height={768} width={1024}/>
                    </div>
                  <div className="flex flex-col">
                  <div className="mt-4 bg-rosspurple dark:bg-rossdarkpurple px-4 mr-auto">
                          <h2 className="text-left text-white whitespace-nowrap">Tech Stack</h2>
                          </div>
                  <motion.ul 
                  layout
                  initial="hidden"
                  animate="visible"
                  variants={list} className="pl-8 text-left list-disc dark:text-white">
                      {details.map((details, index ) => (
                          <motion.li
                          layout
                          initial="hidden"
                          animate="visible"
                          variants={listitem} 
                          key={index}
                          className="">
                          {details}
                      </motion.li> ))}
                  </motion.ul>
                  </div>
                </div>
                <div className="bg-rosspurple dark:bg-rossdarkpurple h-1 w-full"></div>
        <div className="mx-auto overflow-auto">
        <ReactMarkdown className="paragraph line-break list-inside text-left text-black dark:text-white max-w-2xl" remarkPlugins={[remarkGfm, remarkBreaks]}>
          {description}
          </ReactMarkdown>
        </div>
        {git ?  <button className={` p-2 drop-shadow hover:scale-[1.01] bg-rosspurple dark:bg-rossdarkpurple mx-auto`}>
                <Link href={git} target="_blank" 
                rel="noopener noreferrer" className="text-white dark:text-white">Git Repository</Link>
                </button> : <></>}
        </div>
      </motion.div>
      </div>
    )
}
