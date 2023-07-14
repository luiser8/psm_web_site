import Institucion from "./institucion/index";
import Carreras from "./carreras/index";
import Saia from "./saia/index";
import Servicios from "./servicios/index";
import Contacto from "./contactos/index";
import Eventos from "./eventos";

export default function index() {
  return (
    <>
        <Institucion />
        <Eventos />
        <Carreras />
        <Saia />
        <Servicios />
        <Contacto />
    </>
  );
}
