import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "John",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGH-vLqWoKxeUdO_-j3FfRt_ickuQEG-QCUroW7k&s",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
