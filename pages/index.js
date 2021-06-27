import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";
const Homepage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Digital Scrapbook</title>
        <meta
          name="description"
          content="Browse a huge list of memories stored in your digital scrapbook"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

// runs for every incoming requests use only if frequent changes
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_DATA,
//     },
//   };
// }

// below function runs during the build process prefer it if data doesnt changes frequently as this works faster
export async function getStaticProps() {
  // Fetching data from api
  const client = await MongoClient.connect(
    "mongodb+srv://jason2004:Jason@7531@cluster0.ugnh0.mongodb.net/DigitalScrapbook?retryWrites=true&w=majority",
    { useUnifiedTopology: true }
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    // with revalidate it pre renders the page again in 100 secs not only during the build
    revalidate: 100,
  };
}

export default Homepage;
