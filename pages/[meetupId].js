import MeetupDetail from "../components/meetups/MeetupDetai";
const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://img.theculturetrip.com/x/smart/wp-content/uploads/2019/04/shutterstock_421013719.jpg"
      title="First Adventure"
      address="Brazil"
      description="Fun Adventure"
    />
  );
};

// The dynamic ids for which the page needs to be pre rendered should be specified
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const id = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image:
          "https://img.theculturetrip.com/x/smart/wp-content/uploads/2019/04/shutterstock_421013719.jpg",
        id: id,
        title: "First Adventure",
        address: "Brazil",
        description: "Fun Adventure",
      },
    },
  };
}

export default MeetupDetails;
