import Head from "next/head";
import Navbar from "../components/Navbar";
import Home from "../components/Home";

export default function Main() {
  return (
    <div className="bg-cover bg-grayGDM">
      <Head>
        <title>Gente Prevalente</title>
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <Navbar />
      <Home />
    </div>
  );
}
