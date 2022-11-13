import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button } from "../ui/Button/Button";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button>Hello world</Button>
      <Button theme="secondary">Hello world</Button>
    </div>
  );
};

export default Home;
