import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Button } from "../ui/Button/Button";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Haere Mai!</h1>
      <p>Some intro of sorts.</p>
      <Button>Hello world</Button>
      <Button theme="secondary">Hello world</Button>
    </div>
  );
};

export default Home;
