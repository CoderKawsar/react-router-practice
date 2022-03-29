import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetails = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, [friendId]);
  return (
    <div>
      <h2>
        Details of{" "}
        <span style={{ textDecoration: "underline" }}>{friend.name}</span>:
      </h2>
      <h4>Email: {friend.email}</h4>
      <h4>Phone: {friend.phone}</h4>
      <p>City: {friend?.address?.city}</p>
      <p>
        <small>Latitude: {friend.address?.geo?.lat}</small>
      </p>
    </div>
  );
};

export default FriendDetails;
