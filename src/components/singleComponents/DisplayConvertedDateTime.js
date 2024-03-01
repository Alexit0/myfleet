import React from "react";

const DisplayConvertedDateTime = ({ formattedDateTime, type }) => {
  const formatTime = (date) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };

    return new Intl.DateTimeFormat("en-US", options)
      .format(date)
      .replace(",", "");
  };

  return (
    <div>
      {formattedDateTime && (
        <div>
          <p>
            Date:{" "}
            {`${formatTime(formattedDateTime.start)}${
              formattedDateTime.end
                ? ` - ${formatTime(formattedDateTime.end)}`
                : ""
            }`}
            {type && ` ${type}: `}
          </p>
        </div>
      )}
    </div>
  );
};

export default DisplayConvertedDateTime;
