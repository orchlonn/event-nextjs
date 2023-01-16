import Image from "next/image";

const EventPage = (props: any) => {
  return (
    <div>
      <Image
        src={props.data.image}
        width={1000}
        height={600}
        alt={props.data.title}
      />
      <h1>{props.data.title}</h1>
      <p>{props.data.description}</p>
    </div>
  );
};

export default EventPage;

export async function getStaticPaths() {
  const data = await import("../../../data/data.json");
  const allEvents = data.allEvents;

  const allPaths = allEvents.map((path) => {
    return {
      params: { id: path.id, cat: path.city },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { allEvents } = await import("../../../data/data.json");

  const id = context.params.id;
  const eventData = allEvents.find((ev) => ev.id === id);

  return {
    props: { data: eventData },
  };
}
