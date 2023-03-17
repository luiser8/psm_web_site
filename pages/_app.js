import "../styles/tailwind.css";
import "../styles/slick.css";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/Seo/SeoHead";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SeoHead title='Politécnico Santiago Mariño' />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
