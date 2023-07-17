import React, { useState } from "react";
import "../styles/tailwind.css";
import "../styles/slick.css";
import "../styles/backdrop.css";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/Seo/SeoHead";
import ScrollBackTop from "../components/Layout/ScrollBackTop";

export default function App({ Component, pageProps }) {
  const [activeLink, setActiveLink] = useState("institution");
  const [iframe, setIframe] = useState(false);
  return (
    <>
      <SeoHead title='Politécnico Santiago Mariño' />
      <ScrollBackTop setActiveLink={setActiveLink} />
      <Layout activeLink={activeLink} setActiveLink={setActiveLink}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
