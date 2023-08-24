import "server-only"
import { ArtistList } from "./artists"
import { Animation } from "../../utils/animation/animation"
import { Suspense } from 'react'
import Loading from '../loading'
import firebase_app from "../../utils/Google/firebase/config";
import { collection, getFirestore, query, where, getDocs } from "firebase/firestore";

export const dynamic = 'auto'
export const dynamicParams = true
export const revalidate = true
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'
export const maxDuration = 5

export const metadata = {
  title: 'Our Artists',
  description: 'Here is our full roster of artists.',
}

async function getArtists({status}:{status: string}){
  const artists = [];
  const db = getFirestore(firebase_app)
  const q = query(collection(db, "artists"), where("status", "==", status));
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach(doc => {
    let myartists = doc.data();
    myartists.id = doc.id;
    artists.push(myartists)
  });
  return artists
};

async function getTracks({name}:{name: string}){
  const tracks = [];
  const db = getFirestore(firebase_app)
  const q = query(collection(db, "track"), where("artistName", "==", name ));
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach(doc => {
    let mytracks = doc.data();
    mytracks.id = doc.id;
    tracks.push(mytracks)
  });
  
  return tracks
};

export default async function Artists() {
  const activeArtists = await getArtists({status:"Active"})
    return (
      <>
       <Animation mode={'wait'} initial={true}><Suspense fallback={<Loading/>}>
        <div className="flex flex-col mx-auto max-w-4xl justify-center text-center">
        <ArtistList data={activeArtists}/>
        </div>
        </Suspense>
        </Animation>
        </>
    )
  }
  