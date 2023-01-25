import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ props }: { props: any }) => {
  return (
    <div className="home_body">
      {props.data.map((ev: any) => (
        <Link className="card" href={`/events/${ev.id}`} key={ev.id}>
          <div className="image">
            <Image src={ev.image} width="300" height={"300"} alt={ev.title} />
          </div>
          <div className="content">
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
