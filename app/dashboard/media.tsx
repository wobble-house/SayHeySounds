'use client';
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import getDocument from "@/utils/Google/firebase/firestore/getData";
import { getAuth } from "firebase/auth";
import firebase_app from "@/utils/Google/firebase/config";
import { use } from "react";
import ReactAudioPlayer from 'react-audio-player';

const auth = getAuth(firebase_app);
const storage = getStorage();

function MediaData(){

    const listRef = ref(storage, `files/${auth.currentUser.uid}`);
    const mediadata = listAll(listRef)
    .then((res) => {
      res.items.forEach((itemRef) => {
        getDownloadURL(itemRef)
        .then((url) => {
        const img = document.getElementById('myimg');
    img.setAttribute('src', url);
          })
    })
})
  return (
<MediaList media={mediadata}/>
)      
}

export function MediaList(media){
  const mediaList = {
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
            <h2 className="text-xl font-bold">Your Media Uploads</h2>
              <motion.ul
                layout
                initial="hidden"
                whileInView="visible"
                variants={mediaList}
                viewport={{ once: false }}
                className="flex flex-wrap gap-2 mx-auto text-center place-content-center z-30 relative">
                 {media.map(docs => (
                    <MediaCard 
                    key={docs.id} 
                    userId={docs.userId}
                    />
                 ))
                  }
              </motion.ul>
              </div>
  )
}

export function MediaCard({ 
  userId,
 }:{ 
  userId: string,
 }){

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
return (
  <motion.li
    layout
    variants={item}
    id="artist-card" 
    className="flex-col artist-card hover:scale-105 relative grow shrink overscroll-none"
    >
{
<ReactAudioPlayer 
    src="my_audio_file.ogg"
    autoPlay
    controls
    />

}
              </motion.li>
                )
              }

export default function Media(){
  if (auth.currentUser != null)
  return <MediaData/>
  else <></>
}