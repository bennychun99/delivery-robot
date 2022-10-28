import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Boas vindas!</h1>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="route">Definir rota</Link>
        <Link href="manual-control">Controle manual</Link>
        <Swiper
          slidesPerView={1}
          loop
          pagination={pagination}
          modules={[Pagination]}
          className="services-swiper"
        >
          <SwiperSlide>
            <div>Primeiro passo</div>
          </SwiperSlide>
          <SwiperSlide>
            <div>second passo</div>
          </SwiperSlide>
          <SwiperSlide>
            <div>Last passo</div>
          </SwiperSlide>
        </Swiper>
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
