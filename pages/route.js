import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import styles from "../styles/Home.module.css";

import Select from "react-select";

export default function Home() {
  const [coordinatePoints, setFormFields] = useState([{ lat: "", long: "" }]);
  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");

  const handleFormChange = (event, index) => {
    let data = [...coordinatePoints];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };
  const handleInicio = (event) => {
    setInicio(event.value);
  };
  const handleFim = (event) => {
    setFim(event.value);
  };

  const submitForm = async () => {
    const response = await fetch("/api/route", {
      method: "POST",
      body: JSON.stringify({ coordinatePoints }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const submitDik = async () => {
    const response = await fetch("/api/route", {
      method: "POST",
      body: JSON.stringify(dik),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(coordinatePoints);
    submitForm();
  };
  const eletrica = { lat: "-23.55667", long: "-46.73123" };
  const mecanica = { lat: "-23.55395", long: "-46.72988" };
  const civil = { lat: "-23.5553", long: "-46.73136" };
  const bienio = { lat: "-23.55601", long: "-46.73229" };
  const a = { lat: "-23.55608", long: "-46.73065" };
  const b = { lat: "-23.55438", long: "-46.7298" };
  const c = { lat: "-23.55407", long: "-46.72967" };
  const d = { lat: "-23.55594", long: "-46.73075" };
  const e = { lat: "-23.55559", long: "-46.73144" };
  const f = { lat: "-23.55619", long: "-46.73178" };
  const g = { lat: "-23.554", long: "-46.73052" };

  const [dik, setDik] = useState([]);

  const dikstras = () => {
    if (inicio == "eletrica" && fim == "mecanica") {
      setDik([eletrica, a, b, c, mecanica]);
    } else if (inicio == "eletrica" && fim == "bienio") {
      setDik([eletrica, f, bienio]);
    } else if (inicio == "eletrica" && fim == "civil") {
      setDik([eletrica, f, e, civil]);
    } else if (inicio == "bienio" && fim == "mecanica") {
      setDik([bienio, f, a, b, c, mecanica]);
    } else if (inicio == "bienio" && fim == "civil") {
      setDik([bienio, f, e, civil]);
    } else if (inicio == "civil" && fim == "mecanica") {
      setDik([civil, e, g, b, c, mecanica]);
    } else if (inicio == "mecanica" && fim == "eletrica") {
      setDik([mecanica, c, b, a, eletrica]);
    } else if (inicio == "bienio" && fim == "eletrica") {
      setDik([bienio, f, eletrica]);
    } else if (inicio == "civil" && fim == "eletrica") {
      setDik([civil, e, f, eletrica]);
    } else if (inicio == "mecanica" && fim == "bienio") {
      setDik([mecanica, c, b, a, f, bienio]);
    } else if (inicio == "civil" && fim == "bienio") {
      setDik([civil, e, f, bienio]);
    } else if (inicio == "mecanica" && fim == "civil") {
      setDik([mecanica, c, b, g, e, civil]);
    }
    console.log(dik);
    submitDik();
  };

  const addFields = () => {
    let object = {
      lat: "",
      long: "",
    };

    setFormFields([...coordinatePoints, object]);
  };

  const removeFields = (index) => {
    let data = [...coordinatePoints];
    data.splice(index, 1);
    setFormFields(data);
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const [coords, setCoords] = React.useState(false);

  const handleCoords = () => {
    setCoords(!coords);
  };

  const addCoord = (
    <>
      <p>
        Digite os pontos que deseja que o robô passe em latitude e longitude.{" "}
      </p>
      <div className="App">
        <form onSubmit={submit}>
          {coordinatePoints.map((form, index) => {
            return (
              <div key={index}>
                <input
                  name="lat"
                  placeholder="Latitude"
                  onChange={(event) => handleFormChange(event, index)}
                  value={form.lat}
                />
                <input
                  name="long"
                  placeholder="Longitude"
                  onChange={(event) => handleFormChange(event, index)}
                  value={form.long}
                />
                <button onClick={() => removeFields(index)}>Remover</button>
              </div>
            );
          })}
        </form>
        <button onClick={addFields}>Adicionar</button>
        <br />
        <button onClick={submit}>Enviar</button>
      </div>
    </>
  );

  const selectCoord = (
    <>
      Inicio
      <Select
        name="inicio"
        options={[
          { value: "eletrica", label: "Elétrica" },
          { value: "mecanica", label: "Mecânica" },
          { value: "bienio", label: "Biênio" },
          { value: "civil", label: "Civil" },
        ]}
        onChange={(event) => handleInicio(event)}
      ></Select>
      Fim
      <Select
        name="fim"
        options={[
          { value: "eletrica", label: "Elétrica" },
          { value: "mecanica", label: "Mecânica" },
          { value: "bienio", label: "Biênio" },
          { value: "civil", label: "Civil" },
        ]}
        onChange={(event) => handleFim(event)}
      ></Select>
      <button onClick={dikstras}>Enviar</button>
    </>
  );
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/">Voltar</Link>
        <h1>Definir rota</h1>

        {coords ? addCoord : selectCoord}

        <button onClick={handleCoords}>Inserir coordenadas manualmente</button>
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
