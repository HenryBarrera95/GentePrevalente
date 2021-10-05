import Link from 'next/link';
import { 
    FaIndustry,
    FaClock,
    FaChartBar,
    FaUserTie,
    FaUsersCog
    } from 'react-icons/fa';

export const Aprobacion = () => {
    return(
    <>
            <div className="bg-grayGDM ">
                <div className="text-anch ml-sp115 flex ml-sp12 mt-sp40 lg:text-mbox lg:ml-sp45 lg:mt-33">
                    <Link href="/"><a><p className="text-blue-400 inline-flex">Administracion </p></a></Link> / 
                    <Link href="/admin"><a><p>Aprobacion de Empresas</p></a></Link>
                </div>

               
            </div>
                


     </>
    )
}