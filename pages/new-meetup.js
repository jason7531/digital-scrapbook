import NewMeetupForm from "../components/meetups/NewMeetupForm";

const addMeetupHandler = (enteredMeetupData) => {
  console.log(enteredMeetupData);
};

const NewMeetup = () => {
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetup;
