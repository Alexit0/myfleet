import React, { useState, useEffect } from "react";

const DateAndTimeNew = ({ index, value, handleInput }) => {
  const [dateTime, setDateTime] = useState("");

  // Use useEffect to update the local state when the value prop changes
  useEffect(() => {
    setDateTime(value || ""); // Set to an empty string if value is falsy
  }, [value]);

  const maxInputLength = 20;

  const handleInputChange = (event) => {
    let inputValue = event.target.value;

    if (inputValue.length > maxInputLength) {
      inputValue = inputValue.slice(0, maxInputLength);
    }

    const sanitizedValue = inputValue.replace(/[^0-9/: -]/g, "");

    const dateRegex = /^(\d{4}\/\d{2}\/\d{2} \d{4}(-\d{4})?)$/;

    if (dateRegex.test(sanitizedValue)) {
      setDateTime(sanitizedValue);

      handleInput({
        name: "dateTime",
        value: event.target.value,
        index,
      });
    } else {
      setDateTime(sanitizedValue);
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
    </div>
  );
};

export default DateAndTimeNew;
