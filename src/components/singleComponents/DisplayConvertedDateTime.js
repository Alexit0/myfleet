import React from "react";

const DisplayConvertedDateTime = ({
  formattedDateTime,
  type,
  coordinates,
  address,
  comments,
}) => {
  const formatTime = (date, includeDate = true) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );

    if (!includeDate) {
      // Return only the time part if includeDate is false
      return formattedDate.substr(formattedDate.indexOf(" ") + 1);
    }

    return formattedDate.replace(",", "");
  };

  return (
    <div>
      {formattedDateTime && (
        <div>
          <p>
            Date:{" "}
            {`${formatTime(formattedDateTime.start)}${
              formattedDateTime.end
                ? ` - ${formatTime(
                    formattedDateTime.end,
                    formattedDateTime.start.toDateString() !==
                      formattedDateTime.end.toDateString()
                  )}`
                : ""
            }`}
            {type && ` ${type}: `}
            {address && ` ${address} `}
            {coordinates && ` GPS: ${coordinates}`}
          </p>
          <p> {comments && ` ${comments} `}</p>
        </div>
      )}
    </div>
  );
};

export default DisplayConvertedDateTime;
