import "server-only"
import { ArtistList } from "./artists"
import { Animation } from "../../utils/animation/animation"
import firebase_app from "../../utils/Google/firebase/config";
import { collection, getFirestore, query, where, getDocs } from "firebase/firestore";
import Nav from "@/components/nav";
import LoginButton from "@/components/login";
import { Suspense } from "react";
import Loading from "../loading";

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

export default async function Artists() {
  const activeArtists = await getArtists({status:"Active"})
    return (
      <>
      <LoginButton/>
       <Animation mode={'wait'} initial={true}>
       <Suspense fallback={<Loading/>}>
        <div className="flex flex-col min-h-screen mx-auto max-w-4xl text-center mt-20">
        <ArtistList data={activeArtists}/>
        </div>
        </Suspense>
        </Animation>
        </>
    )
  }
  