import React from "react";
import errorComputer from "../../assets/images/errorComputer.svg";

const ErrorDisplay = ({ errorMessage }) => {
  return (
    <div
      id="error-display"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <img
        id="error-image"
        src={errorComputer}
        alt="empty-img"
        style={{ width: "45%" }}
      />
      <h4 id="error-heading" className="headline-large-bold">
        Something went wrong
      </h4>
      <p id="error-message" className="body-large-regular">
        {errorMessage}
      </p>
    </div>
  );
};

export default ErrorDisplay;
