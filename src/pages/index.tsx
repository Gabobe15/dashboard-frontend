import Head from "next/head";
import { Inter } from "next/font/google";
import Dashboard from "./dashboard";
import SideMenu from "@/components/SideMenu/SideMenu";

const inter = Inter({ subsets: ["latin"] });

import { useSession } from "next-auth/react";
import Login from "@/components/login";
import sass from './Home.module.scss'
export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={sass.main}>
        {session && (
          <>
            <SideMenu />
            <Dashboard />
          </>
        )}
        <Login />
      </main>
    </>
  );
}
