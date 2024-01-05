import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name='description' content={props.meetupData.description}/>
      </Head>
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://fallansou:KX06KWBIUtHTwFkP@cluster0.uoqzpo3.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // Fetch data for a single meetup

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://fallansou:KX06KWBIUtHTwFkP@cluster0.uoqzpo3.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selecteMmeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  console.log(meetupId);
  return {
    props: {
      meetupData: {
        id: selecteMmeetup._id.toString(),
        title: selecteMmeetup.title,
        address: selecteMmeetup.address,
        image: selecteMmeetup.image,
        description: selecteMmeetup.description,
      },
    },
  };
}

export default MeetupDetails;
