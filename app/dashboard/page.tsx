import 'server-only'
import React from "react";
import DashboardDisplay from "./dashboard-display";
import { Animation } from '@/utils/animation/animation';
import Section, { Header } from '@/components/section';
import Nav from '@/components/nav';
import LoginButton from '@/components/login';

export const metadata = {
    title: 'Dashboard',
    description: 'Secretsssss',
  }

export default function Dashboard() {
    return (
        <>
        <Nav><LoginButton/></Nav>
<Animation mode={'wait'} initial={'false'}>
    <div className="relative flex min-h-screen flex-col items-center justify-between mt-20">
    <Header>
<h2 className="text-center text-3xl font-black hover:scale-105">Dashboard</h2>
</Header>
<Section>
    <DashboardDisplay/>
</Section>
    </div>
</Animation>
</>
    );
}