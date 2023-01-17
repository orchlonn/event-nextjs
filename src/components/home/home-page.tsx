import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ props }: { props: any }) => {
  return (
    <main>
      {props.data.map((ev: any) => (
        <Link href={`/events/${ev.id}`} key={ev.id}>
          <Image src={ev.image} width="300" height={"300"} alt={ev.title} />
          <h2>{ev.title}</h2>
          <p>{ev.description}</p>
        </Link>
      ))}
    </main>
  );
};
