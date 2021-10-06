import Head from "next/head";
import Navbar from "../components/Navbar";
import Approval from "../components/Approval";

export default function Main() {
  return (
    <div className="bg-cover bg-grayGDM">
      <Head>
        <title>Gente Prevalente</title>
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <Navbar />
      <Approval />
    </div>
  );
}
