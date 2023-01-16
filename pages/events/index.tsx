import Image from "next/image";
import Link from "next/link";
const EventsPage = (data: any) => {
  return (
    <div>
      <h1>Events page</h1>
      <div>
        {data.data.map((ev: any) => (
          <Link href={`/events/${ev.id}`} key={ev.id} passHref>
            <Image src={ev.image} width="300" height={"300"} alt={ev.title} />
            <h2>{ev.title}</h2>/
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("../../data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
