import React from "react";

export default function DoesNotExist(props) {
  

  console.log(props);
  return (
    <>
      <h2>OH! NO!</h2>
      <p>The page you visiting is under construction or does not exist</p>
      <p> Please go to completed page below</p>
      {}
    </>
  );
}
