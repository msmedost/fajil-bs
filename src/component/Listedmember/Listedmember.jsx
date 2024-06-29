import React, { useState, useEffect } from "react";
import axios from "axios";
import CardItem from "../CardItem/CardItem";

function Listedmember() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://bs-mbhb.onrender.com/api/getuser")
      .then((response) => {
        const approvedForms = response.data.filter(
          (form) => form.status === "approved"
        );
        setUsers(approvedForms);
      })
      .catch((error) => {
        console.error("Error fetching the users:", error);
        setError("Error fetching the users");
      });
  }, []);

  return (
    <>
      <div className=" w-screen">
        {error && <p style={{ color: "red" }}>{error}</p>}
        <ul>
          {users.map((eachCard) => (
            <CardItem key={eachCard._id} cardDetails={eachCard} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Listedmember;
