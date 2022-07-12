import React from "react";
import Card from "./card";

const CardList = ({ robots }) => {
  const cardComponent = robots.map((user, i) => {
    return (
      <Card key={robots[i].id} name={robots[i].name} id={robots[i].id} email={robots[i].email} />
    );
  });
  // hi how am i, i want to die
  return <div>{cardComponent}</div>;
};

export default CardList;
