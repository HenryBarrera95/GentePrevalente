import Link from "next/link";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const Approval = () => {
  return (
    <>
      <div className="bg-grayGDM">
        <div className="text-anch ml-sp115 flex ml-sp12 mt-sp40 lg:text-mbox lg:ml-sp45 lg:mt-33">
          <Link href="/">
            <a>
              <span className="text-blue-400">Administracion </span>
            </a>
          </Link>
          /
          <Link href="/admin">
            <a>
              <p>Aprobacion de Empresas</p>
            </a>
          </Link>
        </div>
        <div className="mt-sp38 flex justify-center">
          <FaChevronCircleLeft className="w-sp38 h-sp38 inline-flex text-symbolGray" />
          <span className="mx-sp9 inline-flex text-darkGray my-auto">
            {"Empresa 1 de 2 pendiente por aprobación"}
          </span>
          <FaChevronCircleRight className="w-sp38 h-sp38 inline-flex" />
        </div>
        <div className="w-sp357 h-auto bg-white mt-sp45 mx-auto rounded-xl shadow-box mb-sp45">
          <div className="w-sp1 h-sp1">....Corregir</div>
          <div className="mx-auto my-sp37 w-sp291 h-sp237 bg-grayLogo flex justify-center">
            <img
              src="/items/LogoNegro.png"
              className="w-sp174 h-sp151 my-auto"
            />
          </div>

          <span className="w-sp160 h-sp16 text-labels ml-sp28">
            {"Nombre de la Empresa"}
            <div className="text-black text-brain text-bold font-bold w-sp200 h-sp19 ml-sp33">
              {"PREVALENTWARE S.A.S"}
            </div>
          </span>
          <div className="border-b-2 border-labline w-5/6 flex mx-auto mb-sp51"></div>

          <span className="w-sp160 h-sp16 text-labels ml-sp28">
            {"Tipo de Identificación"}
            <div className="text-black text-brain text-bold font-bold w-sp200 h-sp19 ml-sp33">
              {"NIT"}
            </div>
          </span>
          <div className="border-b-2 border-labline w-5/6 flex mx-auto mb-sp51"></div>

          <span className="w-sp160 h-sp16 text-labels ml-sp28">
            {"Identificación"}
            <div className="text-black text-brain text-bold font-bold w-sp200 h-sp19 ml-sp33">
              {"901375150-4"}
            </div>
          </span>
          <div className="border-b-2 border-labline w-5/6 flex mx-auto mb-sp51"></div>

          <span className="w-sp160 h-sp16 text-labels ml-sp28">
            {"# de Empleados"}
            <div className="text-black text-brain text-bold font-bold w-sp200 h-sp19 ml-sp33">
              {"1 - 10"}
            </div>
          </span>
          <div className="border-b-2 border-labline w-5/6 flex mx-auto mb-sp51"></div>

          <div>
            <span className="w-sp160 h-sp16 text-subtitle font-bold ml-sp28">
              {"Documentos Cargados"}
            </span>
            <ul>
              <li className="inline-flex mx-sp51 w-sp154 h-">
                <a href="/">
                  {" "}
                  {"RUT PrevalentWare"}
                  <img
                    src="/items/pdf.png"
                    alt="Rut Prevalentware"
                    className="inline-flex ml-sp80 my-sp24"
                  />
                </a>
              </li>
              <li className="inline-flex mx-sp51 w-sp154 h-">
                <a href="/">
                  {" "}
                  {"RUT PrevalentWare"}
                  <img
                    src="/items/pdf.png"
                    alt="Rut Prevalentware"
                    className="inline-flex ml-sp80 my-sp24"
                  />
                </a>
              </li>
              <li className="inline-flex mx-sp51 w-sp154 h-">
                <a href="/">
                  {" "}
                  {"RUT PrevalentWare"}
                  <img
                    src="/items/pdf.png"
                    alt="Rut Prevalentware"
                    className="inline-flex ml-sp80 my-sp24"
                  />
                </a>
              </li>
              <li className="inline-flex mx-sp51 w-sp154 h-">
                <a href="/">
                  {" "}
                  {"RUT PrevalentWare"}
                  <img
                    src="/items/pdf.png"
                    alt="Rut Prevalentware"
                    className="inline-flex ml-sp80 my-sp24"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="grid grid-rows-2 gap-sp38 pb-sp45 flex justify-center align-baseline">
          <div className="w-sp223 h-sp46 rounded-2xl shadow-box bg-white flex justify-center text-subtitle font-bold">
            <img src="/items/Vector.png" className="object-scale-down" />
            <p className="my-auto">Aprobar Empresa</p>
          </div>

          <div className="w-sp223 h-sp46 rounded-2xl shadow-box bg-white flex justify-center text-subtitle font-bold">
            <img src="/items/Vector2.png" className="object-scale-down" />
            <p className="my-auto">Rechazar Empresa</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Approval;
