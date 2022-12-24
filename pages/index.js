import Institution from "../components/Institution";
import AcademicOffer from "../components/AcademicOffer";
import StudentServices from "../components/StudentServices";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function index() {
  return (
    <>
      <SeoHead title='Politécnico Santiago Mariño' />
      <Layout>
        <Institution />
        <AcademicOffer />
        <StudentServices />
      </Layout>
    </>
  );
}
