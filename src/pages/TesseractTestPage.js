import React from "react";
import TextExtractionComponent from "../components/singleComponents/TextExtractionComponent";
import TypeSelect from "../components/singleComponents/TypeSelect";
import DateAndTimeNew from "../components/singleComponents/DateAndTimeNew";
import Coordinates from "../components/singleComponents/Coordinates";

const YourPage = () => {
  return (
    <React.Fragment>
      <div style={{ width: "400px" }}>
        <TypeSelect />
        <DateAndTimeNew />
      

      <div style={{ display: "flex", gap: "10px" }}>
        <TextExtractionComponent title="Address" />
        <TextExtractionComponent title="Comments" />
      </div>
      <Coordinates />
</div>
    </React.Fragment>
  );
};

export default YourPage;
