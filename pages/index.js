import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "Our first adventure",
    image:
      "https://img.theculturetrip.com/x/smart/wp-content/uploads/2019/04/shutterstock_421013719.jpg",
    address: "Brazil",
    description: "Rio de janerio trip, enjoyed a lot",
  },
  {
    id: "m2",
    title: "Our first adventure",
    image:
      "https://img.theculturetrip.com/x/smart/wp-content/uploads/2019/04/shutterstock_421013719.jpg",
    address: "Brazil",
    description: "Rio de janerio trip, enjoyed a lot",
  },
  {
    id: "m3",
    title: "Our first adventure",
    image:
      "https://img.theculturetrip.com/x/smart/wp-content/uploads/2019/04/shutterstock_421013719.jpg",
    address: "Brazil",
    description: "Rio de janerio trip, enjoyed a lot",
  },
];
const Homepage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// runs for every incoming requests
export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  return {
    props: {
      meetups: DUMMY_DATA,
    },
  };
}

// below function runs during the build process
// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_DATA,
//     },
// with revalidate it pre renders the page again in 100 secs not only during the build
// revalidate: 100
//   };
// }

export default Homepage;
