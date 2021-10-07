import { PrismaClient } from "@prisma/client";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Approval from "../../components/Approval";

const prisma = new PrismaClient()

const Admin = ({ empresas }) => {
  return (
    <div className="bg-cover bg-grayGDM">
      <Head>
        <title>Gente Prevalente</title>
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <Navbar />
      <Approval empresas={empresas} />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const empresas = await prisma.empresas.findMany({
    where: { aprobado: false }
  });
  return {
    props: { empresas },
  };
}

export default Admin;
