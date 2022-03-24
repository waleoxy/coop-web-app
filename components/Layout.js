import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ img, title, description, children }) => {
  return (
    <div
      className={`h-screen min-h-screen flex flex-col bg-[${img}] bg-no-repeat bg-cover bg-center`}>
      <Head>
        <title>{title ? `${title}-CoopBank` : `CoopBank`}</title>
        {description && <meta name="description" content={description}></meta>}
        <meta name="description" content></meta>
      </Head>
      <Navbar />
      <div className="container min-h-[80vh] flex items-center justify-end">
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  img: 'url("/images/coop.jpg")',
};
