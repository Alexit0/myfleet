import React, { useState } from "react";

const DateAndTimeNew = ({ index, value, handleInput }) => {
  const [dateTime, setDateTime] = useState("");
  const [formattedDateTime, setFormattedDateTime] = useState(null);

  const maxInputLength = 20; // Adjust the maximum length as needed

  const handleInputChange = (event) => {
    let inputValue = event.target.value;

    // Ensure the input length doesn't exceed the maximum length
    if (inputValue.length > maxInputLength) {
      inputValue = inputValue.slice(0, maxInputLength);
    }

    handleInput({
      name: event.target.name,
      value: event.target.value,
      index,
    });

    // Restrict input to valid characters (numbers, "/", " ", ":", and "-")
    const sanitizedValue = inputValue.replace(/[^0-9/: -]/g, "");

    // Use a regular expression to check if the input matches the expected format
    const dateRegex = /^(\d{4}\/\d{2}\/\d{2} \d{4}(-\d{4})?)$/;

    if (dateRegex.test(sanitizedValue)) {
      setDateTime(sanitizedValue);

      // Parse the input string to a Date object
      const [datePart, timePart] = sanitizedValue.split(" ");
      const [year, month, day] = datePart.split("/");
      const [startHour, startMinute, endHour, endMinute] = timePart
        .replace("-", " ")
        .match(/\d{2}/g);

      const formattedStartDate = new Date(
        parseInt(year, 10),
        parseInt(month, 10) - 1, // months are 0-indexed in JavaScript
        parseInt(day, 10),
        parseInt(startHour, 10),
        parseInt(startMinute, 10)
      );

      const formattedEndDate =
        endHour &&
        endMinute &&
        new Date(
          parseInt(year, 10),
          parseInt(month, 10) - 1,
          parseInt(day, 10),
          parseInt(endHour, 10),
          parseInt(endMinute, 10)
        );

      setFormattedDateTime({
        start: formattedStartDate,
        end: formattedEndDate,
      });
    } else {
      setDateTime(sanitizedValue);
      setFormattedDateTime(null);
    }
  };

  return (
    <div>
      <label>Date and Time:</label>
      <input
        name="dateTime"
        type="text"
        value={dateTime}
        onChange={handleInputChange}
        placeholder="YYYY/MM/DD HHMM-HHMM or YYYY/MM/DD HHMM"
        maxLength={maxInputLength}
      />

      {formattedDateTime && (
        <div>
          <p>
            Date:{" "}
            {`${formattedDateTime.start.toLocaleString("en-US", {
              hour12: false,
            })}${
              formattedDateTime.end
                ? ` - ${formattedDateTime.end
                    .toLocaleString("en-US", {
                      hour12: false,
                    })
                    .substr(11)}`
                : ""
            }`}
          </p>
        </div>
      )}
    </div>
  );
};

export default DateAndTimeNew;
