import { React, useState} from "react";
import style from "./SingleTour.module.css";
function SingleTour({ tour, removeItem }) {
    const [readMore, setReadMore] = useState(false);
  return (
    <div>
      <div key={tour.id} className={style.tour}>
        <img
          className={style.image}
          src={tour.image}
          width="40"
          height="40"
          alt="user"
        />
        <div className={style.tourNameAndPrice}>
          <h4>{tour.name}</h4>
          <span className={style.price}>${tour.price}</span>
          
        </div>
        <div className={style.info}>{readMore ? tour.info : tour.info.substring(0,200) + '...'}
        <button className={style.readMoreBtn} onClick={() => setReadMore(!readMore)}>{readMore ? ' See less' : ' Read more'}</button></div>
        <button className={style.removeBtn} onClick={() => removeItem(tour.id)}>Not interested</button>
      </div>
    </div>
  );
}

export default SingleTour;
