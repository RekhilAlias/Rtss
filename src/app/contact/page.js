'use client';
import React from "react";
import axios from "axios";

const Page = () => {

  const handleClick = () => {
    axios
      .get("http://localhost:3000/api/hello")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Contact</h1>
 
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Page;
