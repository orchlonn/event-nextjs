import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props: any) {
  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <img src="" alt="" />
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/about-us">About us</a>
        </nav>
      </header>

      <main className={styles.main}>
        {props.data.map((ev: any) => (
          <a href={`/events/${ev.id}`} key={ev.id}>
            <Image src={ev.image} width="300" height={"300"} alt={ev.title} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </a>
        ))}
      </main>

      {/* <footer>
        <p>2023</p>
      </footer> */}
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { events_categories } = await import("../data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
