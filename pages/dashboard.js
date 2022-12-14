import Head from "next/head";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { MarkerF, GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: -23.554922,
  lng: -46.73105,
};

export default function Dashboard() {
  const URL_API_CONTROL = "http://localhost:3001/api/control";
  const [control, setControl] = useState({ direcao: 0, velocidade: 0 });
  const getCoords = () => {
    fetch(URL_API_CONTROL)
      .then(function (response) {
        response.json().then(function (data) {
          setControl(data);
        });
      })
      .catch(function (err) {
        console.error("Failed retrieving information", err);
      });
  };

  useEffect(() => {
    return () => {
      setInterval(getCoords, 100);
    };
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBt_b4yCQzMA6gDCeVubLninof3nKBNbYs",
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/">Voltar</Link>
        <h1>Dashboard</h1>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            clickableIcons={false}
            zoom={17}
          >
            <MarkerF position={center} />
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        ) : (
          <></>
        )}
        <p>{JSON.stringify(control)}</p>
        <p>Última atualização em: 05/12/2022 às 05:36</p>
        {/* <button onClick={() => setInterval(getCoords, 100)}>CLick me</button> */}
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
