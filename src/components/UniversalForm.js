import React from "react";
import TextExtractionComponent from "../components/singleComponents/TextExtractionComponent";
import TypeSelect from "../components/singleComponents/TypeSelect";
import DateAndTimeNew from "../components/singleComponents/DateAndTimeNew";
import Coordinates from "../components/singleComponents/Coordinates";

const UniversalForm = ({ index, value, handleInput, handleImage }) => {
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
            image={value.address.image}
            value={value.address.value}
            handleInput={handleInput}
            handleImage={handleImage}
          />
          <TextExtractionComponent
            title="Comments"
            name="comments"
            index={index}
            image={value.comments.image}
            value={value.comments.value}
            handleInput={handleInput}
            handleImage={handleImage}
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
