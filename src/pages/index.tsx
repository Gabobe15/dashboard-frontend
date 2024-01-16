import Dashboard from './dashboard';
import Login from '@/components/login';
import { useSession } from 'next-auth/react';
import sass from './Home.module.scss';
import Footer from '@/components/Footer';

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <main className={sass.main}>
        {session && <Dashboard />}
        {!session && <Login />}
      </main>
      <Footer />
    </>
  );
}
