import Image from "next/image";

const EventsPage = (data: any) => {
  return (
    <div>
      <h1>Events page</h1>
      <div>
        {data.data.map((ev: any) => (
          <a href={`/events/${ev.id}`} key={ev.id}>
            <Image src={ev.image} width="300" height={"300"} alt={ev.title} />
            <h2>{ev.title}</h2>/
          </a>
        ))}

        {/* <a href="">
          <h2>Events in Mongolia</h2>
        </a>
        <a href="">
          <img src="" alt="" />
          <h2>Events in Seattle</h2>
        </a>
        <a href="">
          <img src="" alt="" />
          <h2>Events in Seoul</h2>
        </a> */}
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
