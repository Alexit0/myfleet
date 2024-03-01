import React, { useState } from "react";
import parseDateTimeString from "../../utils/parseDateTimeString";
import DisplayConvertedDateTime from "./DisplayConvertedDateTime";

/**
 * DateAndTimeNew Component
 *
 * This component manages date and time input, sanitizes and validates the input,
 * and displays the formatted date and time using the `DisplayConvertedDateTime` component.
 */

const DateAndTimeNew = ({ index, value, handleInput }) => {
  // State for managing input value
  const [dateTime, setDateTime] = useState("");
  // State for storing the formatted date and time
  const [formattedDateTime, setFormattedDateTime] = useState(null);

  // Maximum length for input
  const maxInputLength = 20;

  /**
   * Event handler for input changes
   *
   * Handles input changes, sanitizes and validates the input,
   * and updates the state accordingly.
   */

  const handleInputChange = (event) => {
    // Get the input value
    let inputValue = event.target.value;

    // Ensure the input length doesn't exceed the maximum length
    if (inputValue.length > maxInputLength) {
      inputValue = inputValue.slice(0, maxInputLength);
    }

    // Sanitize input to allow only valid characters
    const sanitizedValue = inputValue.replace(/[^0-9/: -]/g, "");
    console.log("sanitizedValue =>", sanitizedValue);

    // Regular expression to check if the input matches the expected format
    const dateRegex = /^(\d{4}\/\d{2}\/\d{2} \d{4}(-\d{4})?)$/;

    if (dateRegex.test(sanitizedValue)) {
      // Update state with the sanitized input value
      setDateTime(sanitizedValue);
      console.log("dateTime =>", sanitizedValue);


      // Trigger the handleInput function to update the Redux state
      handleInput({
        name: event.target.name,
        value: event.target.value,
        index,
      });

      // Parse the sanitized input string to a Date object and update state
      const parsedDateTime = parseDateTimeString(sanitizedValue);
      setFormattedDateTime(parsedDateTime);
    } else {
      // If the input doesn't match the expected format, update state accordingly
      setDateTime(sanitizedValue);
      setFormattedDateTime(null);
    }
  };

  // JSX rendering
  return (
    <div>
      {/* Label for the input */}
      <label>Date and Time:</label>
      {/* Input field for date and time */}
      <input
        name="dateTime"
        type="text"
        value={dateTime}
        onChange={handleInputChange}
        placeholder="YYYY/MM/DD HHMM-HHMM or YYYY/MM/DD HHMM"
        maxLength={maxInputLength}
      />

      {/* Display the formatted date and time using DisplayConvertedDateTime component */}
      <DisplayConvertedDateTime formattedDateTime={formattedDateTime} />
    </div>
  );
};

export default DateAndTimeNew;
