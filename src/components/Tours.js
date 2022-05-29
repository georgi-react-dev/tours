import React from "react";
import SingleTour from "./SingleTour";
import style from "./Tours.module.css";
function Tours({ tours, removeItem }) {
  
  return (
    <>
      <div>
        {tours.map((tour) => {
          return <SingleTour tour={tour} key={tour.id} removeItem={removeItem}/>;
        })}
      </div>
    </>
  );
}

export default Tours;
