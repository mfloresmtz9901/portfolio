import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "https://wallhaven.cc/w/x6m79l",
    address: "Some address",
    description: "Description meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image: "https://wallhaven.cc/w/3lv8j6",
    address: "Some address",
    description: "Description meetup!",
  },
];

export default function HomePage() {
  return (
    <>
      <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>
    </>
  );
}
