import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ManualControl.module.css";
import { Joystick } from "react-joystick-component";
import { useEffect, useState } from "react";

function ManualControl() {
  const [move, setMove] = useState({ x: 0, y: 0 });
  const submitMove = async () => {
    const response = await fetch("/api/control", {
      method: "POST",
      body: JSON.stringify({ move }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    submitMove();
  }, [move]);

  const handleMove = (e) => {
    setMove({ x: parseInt((e.x / 50) * 90), y: parseInt((e.y / 50) * 100) });
  };
  const handleStop = (e) => {
    setMove({ x: 0, y: 0 });
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/">Home</Link>
        <h1>Controle manual!</h1>
        <Joystick
          size={100}
          baseColor="red"
          stickColor="blue"
          move={handleMove}
          stop={handleStop}
          minDistance={100}
          throttle={50}
        />
        {move.x}
        <br />
        {move.y}
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
export default ManualControl;