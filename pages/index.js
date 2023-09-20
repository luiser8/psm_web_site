import Institucion from "./institucion/index";
import Carreras from "./carreras/index";
import Saia from "./saia/index";
import Servicios from "./servicios/index";
import Contacto from "./contactos/index";
import Eventos from "./eventos";
import Videos from "./videos";

export default function index() {
  return (
    <>
      <Institucion />
      <Eventos />
      <Videos />
      <Carreras />
      <Saia />
      {/* <Servicios /> */}
      <Contacto />
    </>
  );
}
