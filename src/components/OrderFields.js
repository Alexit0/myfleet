import React from "react";

import DateTimeBlock from "./DateTimeBlock";
import AddressBlock from "./AddressBlock";
import Comments from "./singleComponents/Comments";
import CargoDetails from "./singleComponents/CargoDetails";

const OrderFields = (props) => {
  return (
    <div>
      <DateTimeBlock
        value={props.value}
        index={props.index}
        dateTitle={props.dateTitle}
        handleInput={props.handleInput}
      />
      <div>
        <AddressBlock
          value={props.value}
          index={props.index}
          addressTitle={props.addressTitle}
          handleInput={props.handleInput}
        />
      </div>
      <div>
        <CargoDetails
          value={props.value.cargoDetails}
          index={props.index}
          handleInput={props.handleInput}
        />
        <Comments
          value={props.value.comments}
          index={props.index}
          handleInput={props.handleInput}
        />
      </div>
    </div>
  );
};

export default OrderFields;
