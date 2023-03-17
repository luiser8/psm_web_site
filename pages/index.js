import Institution from "./institution/index";
import Academic from "./academic/index";
import Saia from "./saia/index";
import Services from "./services/index";
import Contact from "./contact/index";

export default function index() {
  return (
    <>
        <Institution />
        <Academic />
        <Saia />
        <Services />
        <Contact />
    </>
  );
}
