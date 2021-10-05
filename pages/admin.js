import Head from 'next/head'
import Navbar from '../components/Navbar';
import Aprobacion from '../components/Aprobacion';

export default function Main() {
  return (
    <div className="bg-cover bg-grayGDM">
      <Head>
        <title>Gente Prevalente</title>
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <Navbar />
      <Aprobacion />  
    </div>
  )
}