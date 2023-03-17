import Institucion from "./institucion/index";
import Carreras from "./carreras/index";
import Saia from "./saia/index";
import Servicios from "./servicios/index";
import Contacto from "./contactos/index";

export default function index() {
  return (
    <>
        <Institucion />
        <Carreras />
        <Saia />
        <Servicios />
        <Contacto />
    </>
  );
}
