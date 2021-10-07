import Link from "next/link";
import { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { useRouter } from "next/router";
import axios from "axios";

const Approval = ({ empresas }) => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const userstr = router.query["admin"];
  let user = parseInt(userstr);
  const ndatos = empresas.length;
  let empresaNo = user + 1;

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  const onUpdate = () => {
    return axios.put("/api/updateEmpresa", {
      id: empresas[user]?.id,
    }).then((res) => {
      console.log(res.data);
      window.location.reload();
    }).catch((err) => console.log(err));
  };

  return (
    <>
      <div className="bg-grayGDM">
        <div className="text-anch ml-sp115 flex ml-sp12 mt-sp40 lg:text-mbox lg:ml-sp45 lg:mt-33">
          <Link href="/">
            <a>
              <span className="text-blue-400">Administración</span>
            </a>
          </Link>
          /
          <Link href="/admin">
            <a>
              <p>Aprobación de Empresas</p>
            </a>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-col-reverse justify-center">
          <div className="mt-sp38 lg:mt-sp13 flex justify-center">
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

          <div className="w-sp357 h-auto bg-white mt-sp45 mx-auto rounded-xl shadow-box mb-sp45 lg:w-sp942 lg:h-sp734 pt-sp37 lg:pt-sp314 relative">
            <div className="mx-auto mb-sp37 w-sp291 h-sp237 bg-grayLogo flex justify-center">
              <img
                src={'"' + empresas[user]?.logo + '"'}
                className="w-sp174 h-sp151 my-auto"
              />
            </div>

            <div className="lg:grid grid-flow-col grid-rows-3 grid-cols-2 lg:mt-sp42 lg:flex lg:justify-between">
              <div className="lg:order-1">
                <span className="w-sp160 h-sp16 text-labels ml-sp28 lg:ml-sp132 ">
                  Nombre de la Empresa
                  <div className="text-black text-brain text-bold font-bold w-sp200 h-sp19 ml-sp33 lg:ml-sp138">
                    {empresas[user]?.nombre}
                  </div>
                </span>
                <div className="border-b-2 border-labline w-5/6 flex mx-auto mb-sp51 lg:sp345 lg:w-sp345 lg:ml-sp132"></div>
              </div>

              <div className="lg:order-4">
                <span className="w-sp160 h-sp16 text-labels ml-sp28 lg:ml-sp20">
                  Razón Social
                  <div className="text-black text-brain text-bold font-bold w-sp200 h-sp19 ml-sp33 lg:ml-sp26">
                    {empresas[user]?.razon_social}
                  </div>
                </span>
                <div className="border-b-2 border-labline w-5/6 flex mx-auto mb-sp51 lg:sp345 lg:w-sp345 lg:ml-sp20"></div>
              </div>

              <div className="lg:order-2">
                <span className="w-sp160 h-sp16 text-labels ml-sp28 lg:ml-sp132">
                  Tipo de identificacion
                  <div className="text-black text-brain text-bold font-bold w-sp200 h-sp19 ml-sp33 lg:ml-sp138">
                    {empresas[user]?.nit}
                  </div>
                </span>
                <div className="border-b-2 border-labline w-5/6 flex mx-auto mb-sp51 lg:sp345 lg:w-sp345 lg:ml-sp132"></div>
              </div>

              <div className="lg:order-5">
                <span className="w-sp160 h-sp16 text-labels ml-sp28 lg:ml-sp20">
                  Identificación
                  <div className="text-black text-brain text-bold font-bold w-sp200 h-sp19 ml-sp33 lg:ml-26">
                    {empresas[user]?.identificacion}
                  </div>
                </span>
                <div className="border-b-2 border-labline w-5/6 flex mx-auto mb-sp51 lg:sp345 lg:w-sp345 lg:ml-sp20"></div>
              </div>

              <div>
                <span className="w-sp160 h-sp16 text-labels ml-sp28 lg:ml-sp132 lg:order-3">
                  # de Empleados
                  <div className="text-black text-brain text-bold font-bold w-sp200 h-sp19 ml-sp33 lg:ml-sp138">
                    {empresas[user]?.num_empleados}
                  </div>
                </span>
                <div className="border-b-2 border-labline w-5/6 flex mx-auto mb-sp51 lg:sp345 lg:w-sp345 lg:ml-sp132"></div>
              </div>

              <div className="invisible lg:visible lg:order-6">
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="w-sp230 h-sp60 ml-sp28 shadow-box rounded-xl inline-flex text-subtitle font-bold items-center"
                >
                  <img
                    src="/items/clip.svg"
                    className="w-sp30 h-sp34 ml-sp8 mx-sp4"
                  ></img>
                  Ver archivos adjuntos
                </button>

                {/*        AQUI EMPIEZA EL MODAL         */}

                {showModal ? (
                  <>
                    <div className="justify-center items-center flex fixed inset-0 z-50">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <span className="text-box font-bold">
                              Documentos Cargados
                            </span>
                            <button
                              className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                              onClick={() => setShowModal(false)}
                            >
                              <span className="bg-black text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                              </span>
                            </button>
                          </div>
                          {/*body*/}
                          <div className="relative p-6 flex-auto">
                            <span className="w-sp160 h-sp16 text-subtitle font-bold ml-sp28">
                              Documentos Cargados
                            </span>

                            <div>
                              <ul>
                                <li className="mx-sp51 w-sp211 h-sp28 text-mbox">
                                  <a href="/">
                                    {"RUT " + empresas[user]?.nombre}
                                    <img
                                      src="/items/pdf.png"
                                      className="inline-flex ml-sp80 my-sp24"
                                    />
                                  </a>
                                </li>
                                <li className="mx-sp51 w-sp154 h-">
                                  <a href="/">
                                    {"LOGO " + empresas[user]?.nombre}
                                    <img
                                      src="/items/pdf.png"
                                      className="inline-flex ml-sp80 my-sp24"
                                    />
                                  </a>
                                </li>
                                <li className="mx-sp51 w-sp154 h-">
                                  <a href="/">
                                    {"Acta de constitución " +
                                      empresas[user]?.nombre}
                                    <img
                                      src="/items/pdf.png"
                                      className="inline-flex ml-sp80 my-sp24"
                                    />
                                  </a>
                                </li>
                                <li className="mx-sp51 w-sp154 h-">
                                  <a href="/">
                                    {"Cámara de Comercio " +
                                      empresas[user]?.nombre}
                                    <img
                                      src="/items/pdf.png"
                                      className="inline-flex ml-sp80 my-sp24"
                                    />
                                  </a>
                                </li>
                                <li className="mx-sp51 w-sp154 h-">
                                  <a href="/">
                                    {"Otro Documento" + empresas[user]?.nombre}
                                    <img
                                      src="/items/pdf.png"
                                      className="inline-flex ml-sp80 my-sp24"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}
              </div>
            </div>

            <div className="lg:invisible">
              <span className="w-sp160 h-sp16 text-subtitle font-bold ml-sp28">
                Documentos Cargados
              </span>
              <ul>
                <li className="inline-flex w-sp154 h-">
                  <a href="/">
                    {"RUT " + empresas[user]?.nombre}
                    <img
                      src="/items/pdf.png"
                      className="inline-flex ml-sp80 my-sp24"
                    />
                  </a>
                </li>
                <li className="inline-flex  w-sp154 h-">
                  <a href="/">
                    {"RUT " + empresas[user]?.nombre}
                    <img
                      src="/items/pdf.png"
                      className="inline-flex ml-sp80 my-sp24"
                    />
                  </a>
                </li>
                <li className="inline-flex mx-sp51 w-sp154 h-">
                  <a href="/">
                    {"RUT " + empresas[user]?.nombre}
                    <img
                      src="/items/pdf.png"
                      className="inline-flex ml-sp80 my-sp24"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="invisible grid grid-rows-2 gap-sp38 flex justify-center lg:visible absolute top-sp38 right-sp38">
              <button
                className="w-sp223 h-sp46 rounded-2xl shadow-box bg-white flex justify-center text-subtitle font-bold items-center"
                onClick={onUpdate}
              >
                <img
                  src="/items/Vector.png"
                  className="object-scale-down mr-sp9"
                />
                <p className="my-auto">Aprobar Empresa</p>
              </button>

              <button className="w-sp223 h-sp46 rounded-2xl shadow-box bg-white flex justify-center text-subtitle font-bold items-center">
                <img
                  src="/items/Vector2.png"
                  className="object-scale-down mr-sp9"
                />
                <p className="my-auto">Rechazar Empresa</p>
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-sp38 pb-sp45 flex justify-center align-baseline lg:invisible">
          <button 
            className="w-sp223 h-sp46 rounded-2xl shadow-box bg-white flex justify-center text-subtitle font-bold items-center"
            onClick={onUpdate}
          >
            <img src="/items/Vector.png" className="object-scale-down mr-sp9" />
            <p className="my-auto">Aprobar Empresa</p>
          </button>

          <button className="w-sp223 h-sp46 rounded-2xl shadow-box bg-white flex justify-center text-subtitle font-bold items-center">
            <img
              src="/items/Vector2.png"
              className="object-scale-down mr-sp9"
            />
            <p className="my-auto">Rechazar Empresa</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Approval;
