import Link from "next/link";
import {
  FaIndustry,
  FaClock,
  FaChartBar,
  FaUserTie,
  FaUsersCog,
} from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-sp15 lg:mx-sp140 mt-sp80 lg:mt-sp110">
        <Link href="/admin/0">
          <a>
            <figure className="shadow-box mx-auto bg-white rounded-xl h-sp145 w-sp345 lg:h-sp330 lg:w-sp550">
              <div className="flex lg:flex-col">
                <div className="absolute w-sp62 h-sp67 ml-sp16 mr-sp18 lg:w-sp108 lg:h-sp115 lg:ml-sp33 rounded-lg bg-BlueGDM -translate-y-1/4">
                  <FaIndustry className="text-white text-FaSize mx-auto mt-sp15 lg:text-Fa2Size lg:mt-sp24" />
                </div>
                <span className="absolute h-sp61 w-sp237 text-mbox mt-sp14 ml-sp96 lg:h-sp94 lg:w-sp390 lg:ml-sp27 lg:mt-sp132 lg:text-box">
                  Solicitudes de creacion de empresas
                </span>
              </div>
              <div className="border-b-2 border-gray-400 mt-sp104 lg:mt-sp260"></div>
              <div className="space-x-2 text-gray-400 mt-11sp lg:ml-auto inline-flex rounded items-center">
                <FaClock className="mt-sp8 ml-sp27 text-gray-400 lg:mt-sp27" />
                <span className="text-subtext mt-sp8 lg:text-anch lg:mt-sp27 lg:w-sp130 lg:h-sp16">
                  2 Solicitudes sin tratar
                </span>
              </div>
            </figure>
          </a>
        </Link>

        <figure className="shadow-box mx-auto mt-sp80 bg-white rounded-xl h-sp145 w-sp345 lg:mt-0 lg:h-sp330 lg:w-sp550">
          <div className="flex lg:flex-col">
            <div className="absolute w-sp62 h-sp67 ml-sp16 mr-sp18 lg:w-sp108 lg:h-sp115 lg:ml-sp33 rounded-lg bg-BlueGDM -translate-y-1/4">
              <FaChartBar className="text-white text-FaSize mx-auto mt-sp15 lg:text-Fa2Size lg:mt-sp24" />
            </div>
            <span className="absolute h-sp61 w-sp237 text-mbox mt-sp14 ml-sp96 lg:h-sp94 lg:w-sp390 lg:ml-sp27 lg:mt-sp132 lg:text-box">
              Indicadores
            </span>
          </div>
          <div className="border-b-2 border-gray-400 mt-sp104 lg:mt-sp260"></div>
          <div className="space-x-2 text-gray-400 mt-11sp lg:ml-auto inline-flex rounded items-center">
            <FaClock className="mt-sp8 ml-sp27 text-gray-400 lg:mt-sp27" />
            <span className="text-subtext mt-sp8 lg:text-anch lg:mt-sp27 lg:w-sp130 lg:h-sp16">
              Visitado por ultima vez: 31/01/2020
            </span>
          </div>
        </figure>

        <figure className="shadow-box mx-auto mt-sp80 bg-white rounded-xl h-sp145 w-sp345 lg:mt-sp74 lg:h-sp330 lg:w-sp550 lg:mb-sp110">
          <div className="mx-auto flex lg:flex-col">
            <div className="absolute w-sp62 h-sp67 ml-sp16 mr-sp18 lg:w-sp108 lg:h-sp115 lg:ml-sp33 rounded-lg bg-BlueGDM -translate-y-1/4">
              <FaUserTie className="text-white text-FaSize mx-auto mt-sp15 lg:text-Fa2Size lg:mt-sp24" />
            </div>
            <span className="absolute h-sp45 w-sp237 text-mbox mt-sp8 ml-sp114 lg:h-sp94 lg:w-sp457 lg:ml-sp27 lg:mt-sp132 lg:text-box">
              Inscripcion de empleados en empresas
            </span>
          </div>

          <div className="border-b-2 border-gray-400 mt-sp104 lg:mt-sp260"></div>
          <div className="space-x-2 text-gray-400 mt-11sp lg:ml-auto inline-flex rounded items-center">
            <FaClock className="mt-sp8 ml-sp27 text-gray-400 lg:mt-sp27" />
            <span className="text-subtext mt-sp8 lg:text-anch lg:mt-sp27 lg:w-sp130 lg:h-sp16">
              3 usuarios sin empresa registrada
            </span>
          </div>
        </figure>

        <figure className="shadow-box mx-auto mt-sp80 mb-sp80 bg-white rounded-xl h-sp145 w-sp345 lg:mb-sp110 lg:mt-sp74 lg:h-sp330 lg:w-sp550">
          <div className="mx-auto flex lg:flex-col">
            <div className="absolute w-sp62 h-sp67 ml-sp16 mr-sp18 lg:w-sp108 lg:h-sp115 lg:ml-sp33 rounded-lg bg-BlueGDM -translate-y-1/4">
              <FaUsersCog className="text-white text-FaSize mx-auto mt-sp15 lg:text-Fa2Size lg:mt-sp24" />
            </div>
            <span className="absolute h-sp45 w-sp237 text-mbox mt-sp14 ml-sp96 lg:h-sp94 lg:w-sp457 lg:ml-sp27 lg:mt-sp132 lg:text-box">
              Solicitudes de creacion de empresas
            </span>
          </div>

          <div className="border-b-2 border-gray-400 mt-sp104 lg:mt-sp260"></div>
          <div className="space-x-2 text-gray-400 mt-11sp lg:ml-auto inline-flex rounded items-center">
            <FaClock className="mt-sp8 ml-sp27 text-gray-400 lg:mt-sp27" />
            <span className="text-subtext mt-sp8 lg:text-anch lg:mt-sp27 lg:w-sp130 lg:h-sp16">
              2 Solicitudes sin tratar
            </span>
          </div>
        </figure>
      </div>
    </>
  );
}
export default Home;