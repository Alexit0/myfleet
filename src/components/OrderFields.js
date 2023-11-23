import React from "react";

import Cargo from "./singleComponents/Cargo";
import Ref from "./singleComponents/Ref";
import DateTimeBlock from "./DateTimeBlock";
import AddressBlock from "./AddressBlock";
import Comments from "./singleComponents/Comments";
import CargoDetails from "./singleComponents/CargoDetails";

const OrderFields = (props) => {
  return (
    <div>
      <DateTimeBlock />
      <div>
        <AddressBlock />
      </div>
      <div>
        <CargoDetails
          value={props.value.cargoDetails}
          index={props.index}
          generalInput={props.generalInput}
        />
        <Comments
          value={props.value.comments}
          index={props.index}
          generalInput={props.generalInput}
        />
      </div>
    </div>
  );
};

export default OrderFields;
