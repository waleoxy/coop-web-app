import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Register from "../components/Register";
import { Store } from "../contexts/store";
import styles from "../styles/Home.module.css";
import About from "./about";
import Contact from "./contact";
import Faq from "./faq";
import Newsletter from "./newsletter";

export default function Home() {
  const { state } = useContext(Store);
  const { isLogin } = state;
  return (
    <>
      <Navbar />
      <Layout>{isLogin ? <Login /> : <Register />}</Layout>
      <About />
      <Newsletter />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
