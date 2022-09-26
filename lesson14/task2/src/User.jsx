import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw new Error("Failed to fetch user data");
      })
      .then(response => response.json())
      .then(userData => {
        setUserData(userData);
      });
  }, [userId]);

  if (!userData) {
    return null;
  }
  const { name, avatar_url, location } = userData;
  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;
