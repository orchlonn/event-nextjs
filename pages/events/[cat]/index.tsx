import Image from "next/image";
import Link from "next/link";

const EventsCatPage = (props: any) => {
  return (
    <div>
      <h1>Events in {props.pageName}</h1>
      <div>
        {props.data.map((ev: any) => (
          <Link href={`${ev.city}/${ev.id}`} key={ev.id} passHref>
            <Image src={ev.image} width="300" height={"300"} alt={ev.title} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("../../../data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const id = context?.params.cat;

  const { allEvents } = await import("../../../data/data.json");
  const data = allEvents.filter((ev) => ev.city === id);

  return { props: { data, pageName: id } };
}
