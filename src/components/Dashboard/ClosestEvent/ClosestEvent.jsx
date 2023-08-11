import React from "react";
import time from "../../../assets/icons/schedule.svg";
import location from "../../../assets/icons/my_location.svg";
import SeeMore from "../../../elements/SeeMore/SeeMore";

const ClosestEvent = ({ events }) => {
  return (
    <div id="closest-event" className="closest-event">
      <h1 id="closest-event-title" className="title-large-semibold mb-16">
        Event Terdekat
      </h1>
      {events.map((event, index) => (
        <div
          id={`closest-event-item-${index}`}
          key={index}
          className={`gap-3 mb-16`}
        >
          <h4
            id={`closest-event-title-${index}`}
            className="body-large-semibold mb-8"
          >
            {event.title}
          </h4>
          <div
            id={`closest-event-location-${index}`}
            className="d-flex align-items-center mb-8"
          >
            <img src={location} alt="article-img" />
            <p className="label-large-regular mb-0 ms-8">{event.location}</p>
          </div>
          <div
            id={`closest-event-time-${index}`}
            className="d-flex align-items-center"
          >
            <img src={time} alt="article-img" />
            <p className="label-large-regular mb-0 ms-8">{event.time}</p>
          </div>
        </div>
      ))}
      <SeeMore id="closest-event-see-more" to="event" label="Lihat semua" />
    </div>
  );
};

export default ClosestEvent;
