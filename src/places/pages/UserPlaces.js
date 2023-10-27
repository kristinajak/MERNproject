import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire state building",
    description: "One of the most popular state building",
    imageUrl:
      "https://media.istockphoto.com/id/178735930/photo/dramatic-sunset-view-highlighting-the-empire-state-building.jpg?s=612x612&w=0&k=20&c=vvpfw74yLA1H3ieZh3ENSkeukxjpeXJ-Q6AJovigIEo=",
    address: "20 W 34th St, New York, NY",
    location: {
      lat: 40.7484405,
      lng: -73.9882393,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Yosemite National Park",
    description: "One of the most beautiful parks",
    imageUrl:
      "https://media.cntraveler.com/photos/5b71a3d92211d70d9158ae1a/16:9/w_2560%2Cc_limit/Yosemite_GettyImages-632167865.jpg",
    address: "California",
    location: {
      lat: 37.8514706,
      lng: -120.2105146,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
