import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { coords } from "../data/coordinates";
import { moves } from "../data/moves";
import styles from "../styles/Home.module.css";

export default function Dashboard() {
  const [control, setControl] = useState({ direcao: 0, velocidade: 0 });
  const getControl = () => {
    fetch("https://delivery-robot-nine.vercel.app/api/control")
      .then((response) => response.json())
      .then((data) => setControl(data));
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Dashboard!</h1>

        {control.direcao}
        {control.velocidade}
        <button onClick={setInterval(getControl, 1000)}>CLick me</button>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
