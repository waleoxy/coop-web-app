import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Register from "../components/Register";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Register />
    </Layout>
  );
}
