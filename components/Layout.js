import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ title, description, children }) => {
  return (
    <div
      className={`px-24 pb-9  min-h-screen w-screen items-center
      flex flex-col bg-[url("/images/coop.jpg")] bg-no-repeat 
      bg-cover bg-center`}>
      <Head>
        <title>{title ? `${title}-CoopBank` : `CoopBank`}</title>
        {description && <meta name="description" content={description}></meta>}
        <meta name="description" content></meta>
      </Head>
      <div className="container min-h-[80vh] flex items-center justify-end">
        {children}
      </div>
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  img: 'url("/images/coop.jpg")',
};
