import Link from "next/link";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaDraftingCompass,
} from "react-icons/fa";
import data from "./data/data.json";
import { Router, useRouter } from "next/router";
import { parse } from "postcss";
import { IconBase } from "react-icons/lib";

const Approval = () => {
  const router = useRouter();
  let userstr = router.query["admin"];
  let user = parseInt(userstr);
  console.log("userstr = " + userstr);
  console.log(user);
  let empresaNo = user + 1;
  const ndatos = data.Companies.length;

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

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
        <div className="mt-sp38 flex justify-center lg:invisible">
          <button
            type="button"
            onClick={
              user > 0
                ? () => router.replace("" + (user -= 1))
                : console.log("")
            }
          >
            <FaChevronCircleLeft
              className={
                user > 0
                  ? "w-sp38 h-sp38 inline-flex text-black"
                  : "w-sp38 h-sp38 inline-flex text-symbolGray"
              }
            />
          </button>

          <span className="mx-sp9 inline-flex text-darkGray my-auto">
            Empresa {empresaNo} de {ndatos} pendiente por aprobación
          </span>

          <button
            type="button"
            onClick={
              user < ndatos - 1
                ? () => router.replace("" + (user += 1))
                : console.log("")
            }
          >
            <FaChevronCircleRight
              className={
                user == ndatos - 1
                  ? "w-sp38 h-sp38 inline-flex text-symbolGray"
                  : "w-sp38 h-sp38 inline-flex text-black"
              }
            />
          </button>
        </div>

        <div className="w-sp357 h-auto bg-white mt-sp45 mx-auto rounded-xl shadow-box mb-sp45 lg:w-sp942 lg:h-sp734">
          <div className="w-sp1 h-sp1">....Corregir</div>
          <div className="mx-auto my-sp37 w-sp291 h-sp237 bg-grayLogo flex justify-center">
            <img
              src="/items/LogoNegro.png"
              className="w-sp174 h-sp151 my-auto"
            />
          </div>

          <div className="lg:grid grid-flow-col grid-rows-3 grid-cols-2 lg:mt-sp42 lg:flex lg:justify-between">
            <div className="lg:order-1">
              <span className="w-sp160 h-sp16 text-labels ml-sp28 lg:ml-sp132 ">
                Nombre de la Empresa
                <div className="text-black text-brain text-bold font-bold w-sp200 h-sp19 ml-sp33 lg:ml-sp138">
                  {data["Companies"][user].Nombre}
                </div>
              </span>
              <div className="border-b-2 border-labline w-5/6 flex mx-auto mb-sp51 lg:sp345 lg:w-sp345 lg:ml-sp132"></div>
            </div>

            <div className="lg:order-4">
              <span className="w-sp160 h-sp16 text-labels ml-sp28 lg:ml-sp20">
                Razón Social
                <div className="text-black text-brain text-bold font-bold w-sp200 h-sp19 ml-sp33 lg:ml-sp26">
                  {data["Companies"][user].Razón}
                </div>
              </span>
              <div className="border-b-2 border-labline w-5/6 flex mx-auto mb-sp51 lg:sp345 lg:w-sp345 lg:ml-sp20"></div>
            </div>

            <div className="lg:order-2">
              <span className="w-sp160 h-sp16 text-labels ml-sp28 lg:ml-sp132">
                Tipo de Identificación
                <div className="text-black text-brain text-bold font-bold w-sp200 h-sp19 ml-sp33 lg:ml-sp138">
                  {data["Companies"][user]["NIT"]}
                </div>
              </span>
              <div className="border-b-2 border-labline w-5/6 flex mx-auto mb-sp51 lg:sp345 lg:w-sp345 lg:ml-sp132"></div>
            </div>

            <div className="lg:order-5">
              <span className="w-sp160 h-sp16 text-labels ml-sp28 lg:ml-sp20">
                Identificación
                <div className="text-black text-brain text-bold font-bold w-sp200 h-sp19 ml-sp33 lg:ml-26">
                  {data["Companies"][user]["Identificación"]}
                </div>
              </span>
              <div className="border-b-2 border-labline w-5/6 flex mx-auto mb-sp51 lg:sp345 lg:w-sp345 lg:ml-sp20"></div>
            </div>

            <div>
              <span className="w-sp160 h-sp16 text-labels ml-sp28 lg:ml-sp132 lg:order-3">
                # de Empleados
                <div className="text-black text-brain text-bold font-bold w-sp200 h-sp19 ml-sp33 lg:ml-sp138">
                  {data["Companies"][user]["#"]}
                </div>
              </span>
              <div className="border-b-2 border-labline w-5/6 flex mx-auto mb-sp51 lg:sp345 lg:w-sp345 lg:ml-sp132"></div>
            </div>

            <div className="invisible lg:visible lg:order-6 ">
              <button className="w-sp228 h-sp60 ml-sp28 lg:ml-sp20 bg-white shadow-box rounded-xl text-subtitle font-bold">
                <img src="/items/docs.png">

                </img>
                Ver archivos adjuntos
              </button>
            </div>

          </div>





          <div className="lg:invisible">
            <span className="w-sp160 h-sp16 text-subtitle font-bold ml-sp28">
              Documentos Cargados
            </span>
            <ul>
              <li className="inline-flex mx-sp51 w-sp154 h-">
                <a href="/">
                  {"RUT " + data["Companies"][user]["Nombre"]}
                  <img
                    src="/items/pdf.png"
                    alt="Rut Prevalentware"
                    className="inline-flex ml-sp80 my-sp24"
                  />
                </a>
              </li>
              <li className="inline-flex mx-sp51 w-sp154 h-">
                <a href="/">
                  {"RUT " + data["Companies"][user]["Nombre"]}
                  <img
                    src="/items/pdf.png"
                    alt="Rut Prevalentware"
                    className="inline-flex ml-sp80 my-sp24"
                  />
                </a>
              </li>
              <li className="inline-flex mx-sp51 w-sp154 h-">
                <a href="/">
                  {"RUT " + data["Companies"][user]["Nombre"]}
                  <img
                    src="/items/pdf.png"
                    alt="Rut Prevalentware"
                    className="inline-flex ml-sp80 my-sp24"
                  />
                </a>
              </li>
              <li className="inline-flex mx-sp51 w-sp154 h-">
                <a href="/">
                  {"RUT " + data["Companies"][user]["Nombre"]}
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

        <div className="grid grid-rows-2 gap-sp38 pb-sp45 flex justify-center align-baseline">
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
