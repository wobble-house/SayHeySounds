import 'server-only'
import React from "react";
import { Animation } from '@/utils/animation/animation';
import Section, { Header } from '@/components/section';
import Nav from '@/components/nav';
import LoginButton from '@/components/login';
import Admin from "./admin-display";
import { Suspense } from 'react';
import Loading from '../loading';

export const metadata = {
    title: 'Dashboard',
    description: 'Secretsssss',
  }


export default async function Dashboard() {
    return (
        <>
        <Nav><LoginButton/></Nav>
<Animation mode={'wait'} initial={'false'}>
<Suspense fallback={<Loading/>}>
    <div className="relative flex min-h-screen flex-col items-center justify-between mt-20">
    <Header>
<h2 className="text-center text-3xl font-black hover:scale-105">Dashboard</h2>
</Header>
<Section>
    <Admin />
</Section>
    </div>
    </Suspense>
</Animation>
</>
    )
}

