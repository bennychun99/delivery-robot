import Head from "next/head";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { coords } from "../data/coordinates";
import { moves } from "../data/moves";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import styles from "../styles/Home.module.css";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
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

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        ) : (
          <></>
        )}
        <h1>Dashboard!</h1>
        <p>{JSON.stringify(control)}</p>
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
