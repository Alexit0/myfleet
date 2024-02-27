import React from "react";
import TextExtractionComponent from "../components/singleComponents/TextExtractionComponent";
import TypeSelect from "../components/singleComponents/TypeSelect";
import DateAndTimeNew from "../components/singleComponents/DateAndTimeNew";
import Coordinates from "../components/singleComponents/Coordinates";

const UniversalForm = () => {
  return (
    <div style={{padding: '10px'}}>
      <div
        style={{
          width: "380px",
          border: "solid",
          borderRadius: "8px",
          padding: "10px",
        }}
      >
        <TypeSelect />
        <DateAndTimeNew />

        <div style={{ display: "flex", gap: "13px" }}>
          <TextExtractionComponent title="Address" />
          <TextExtractionComponent title="Comments" />
        </div>
        <Coordinates />
      </div>
    </div>
  );
};

export default UniversalForm;
