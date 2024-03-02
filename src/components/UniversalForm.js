import React from "react";
import TextExtractionComponent from "../components/singleComponents/TextExtractionComponent";
import TypeSelect from "../components/singleComponents/TypeSelect";
import DateAndTimeNew from "../components/singleComponents/DateAndTimeNew";
import Coordinates from "../components/singleComponents/Coordinates";

const UniversalForm = ({ index, value, handleInput, handleInputChange }) => {
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          width: "380px",
          border: "solid",
          borderRadius: "8px",
          padding: "10px",
        }}
      >
        <TypeSelect
          index={index}
          value={value.type}
          handleInput={handleInput}
        />
        <DateAndTimeNew
          index={index}
          value={value.dateTime}
          handleInput={handleInput}
        />

        <div style={{ display: "flex", gap: "13px" }}>
          <TextExtractionComponent
            title="Address"
            name="address"
            index={index}
            value={value.address}
            handleInput={handleInput}
            onChange={(newValue) =>
              handleInputChange({ name: "address", value: newValue, index })
            }
          />
          <TextExtractionComponent
            title="Comments"
            name="comments"
            index={index}
            value={value.comments}
            handleInput={handleInput}
            onChange={(newValue) =>
              handleInputChange({ name: "comments", value: newValue, index })
            }
          />
        </div>
        <Coordinates
          index={index}
          value={value.coordinates}
          handleInput={handleInput}
        />
      </div>
    </div>
  );
};

export default UniversalForm;
