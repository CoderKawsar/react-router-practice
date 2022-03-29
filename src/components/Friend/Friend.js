import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Friend = (props) => {
  const { name, username, id } = props.friend;
  const navigate = useNavigate();
  const showFriendDetail = () => {
    const path = `/friend/${id}`;
    navigate(path);
  };
  return (
    <div>
      <h1>Hello: {name}</h1>
      <Link to={`/friend/${id}`}>Friend Details</Link>
      <button onClick={showFriendDetail}>{username}</button>
    </div>
  );
};

export default Friend;
