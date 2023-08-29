'use client';
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { SubsDetailsCard } from "../../components/details-card";
import {getDocuments} from "@/utils/Google/firebase/firestore/getData";
import { getAuth } from "firebase/auth";
import firebase_app from "@/utils/Google/firebase/config";
import { use } from "react";

const auth = getAuth(firebase_app);

function SubsData(){
const subs = []
const subsdata = use(getDocuments({collectionName:"submissions", fieldPath: "userId", value: auth.currentUser.uid}));
const data = subsdata.result
data.forEach(doc => {
  let mydata = doc.data();
  mydata.id = doc.id;
  subs.push(mydata)
});
  return (
<SubsList subs={subs}/>
)      
}

export function SubsList({subs}:{subs: any[]}){
  const subList = {
    visible: { 
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
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
                variants={subList}
                viewport={{ once: false }}
                className="flex flex-wrap gap-2 mx-auto text-center place-content-center z-30 relative">
                 {subs.map(docs => (
                    <SubCard 
                    key={docs.id} 
                    additionalNotes={docs.additionalNotes}
                    budget={docs.budget}
                    companyName={docs.companyName}
                    creativeNotes={docs.creativeNotes}
                    description={docs.description}
                    email={docs.email}
                    firstName={docs.firstName}
                    genre={docs.genre}
                    lastName={docs.lastName}
                    phone={docs.phone}
                    projectName={docs.projectName}
                    subgenre={docs.subgenre}
                    userId={docs.userId}
                    />
                 ))
                  }
              </motion.ul>
              </div>
  )
}

export function SubCard({ 
  additionalNotes,
  budget,
  companyName,
  creativeNotes,
  description,
  email,
  firstName,
  genre,
  lastName,
  phone,
  projectName,
  subgenre,
  userId,
 }:{ 
  additionalNotes: string,
  budget: string,
  companyName: string,
  creativeNotes: string,
  description: string,
  email: string,
  firstName: string,
  genre: string,
  lastName: string,
  phone: string,
  projectName: string,
  subgenre: string,
  userId: string,
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
            duration: 2,
            type: "spring",
            damping: 40,
            stiffness: 250,
          },
      },
      visible: {
          opacity: 1,
          scale: 1,
          transition: {
              duration: 1.5,
              type: "spring",
              damping: 40,
              stiffness: 250,
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
      },
    },
    hidden: { 
      opacity: 0,
      scale: 0,
      y:-100,
      transition: {
        when: "afterChildren",
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
    key={projectName} 
    variants={item}
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
                  <SubsDetailsCard 
                    additionalNotes={additionalNotes}
                    budget={budget}
                    companyName={companyName}
                    creativeNotes={creativeNotes}
                    description={description}
                    email={email}
                    firstName={firstName}
                    genre={genre}
                    lastName={lastName}
                    phone={phone}
                    projectName={projectName}
                    subgenre={subgenre}
                    userId={userId} />
                    </div>
                </motion.div>
                </div>
                </motion.li>
                )
else return (
  <motion.li
    layout
    key={projectName} 
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
                    <div className="flex content-center justify-center relative shadow-3xl ">
                    <div className="relative justify-start w-full">
                <div className="absolute px-2 z-30">
                        <h2 className="text-xl uppercase font-bold text-left">{projectName}</h2>
                  </div>
                <div className="flex bg-zinc-50 relative w-48 h-32 text-black">
                </div>
                </div>
                </div>
              </motion.button>
              </motion.li>
                )
              }

export default function Subs(){
  if (auth.currentUser != null)
  return <SubsData/>
  else <></>
}