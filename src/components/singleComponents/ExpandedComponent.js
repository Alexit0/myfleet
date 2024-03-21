import React from "react";
import classes from "./ExpandedComponent.module.css";

// An expandable component.
const ExpandedComponent = ({ data }) => {
  return (
    <div>
      <ul className={classes.ul}>
        {data.order.map((place, index) => (
          <li key={`${place.address}-${index}`}>
            <strong>{`${place.dateTime} `}</strong>
            <strong>{`${place.type}: `}</strong>
            <br />
            {place.address
              .split(/\n+/)
              .filter((line) => line.trim() !== "")
              .map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            {place.distance && `(${place.distance} km)`}
            {place.coordinates && `GPS: ${place.coordinates}`}
            <br />
            <br />
            {place.comments && (
              <div>
                <strong>Comments:</strong>{" "}
                <span
                  dangerouslySetInnerHTML={{
                    __html: place.comments.replace(/\n/g, "<br />"),
                  }}
                />
              </div>
            )}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpandedComponent;
