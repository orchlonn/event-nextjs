import Image from "next/image";

const EventsCatPage = (data: any) => {
  console.log(data, "dataatatata");
  return (
    <div>
      <h1>Events in Barcelona</h1>
      <div>
        {data.data.map((ev: any) => (
          <a href={`events/${ev.city}/${ev.id}`} key={ev.id}>
            <Image src={ev.image} width="300" height={"300"} alt={ev.title} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </a>
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

  return { props: { data } };
}
