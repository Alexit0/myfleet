import React from "react";

import Cargo from "./singleComponents/Cargo";
import Ref from "./singleComponents/Ref";
import DateTimeBlock from "./DateTimeBlock";
import AddressBlock from "./AddressBlock";
import Comments from "./singleComponents/Comments";


const OrderFields = (props) => {
  return (
    <div>
      <DateTimeBlock
        dateTitle={props.dateTitle}
        generalInput={props.generalInput}
        index={props.index}
        date={props.value.date}
        timeFrom={props.value.timeFrom}
        timeTo={props.value.timeTo}
        fixedTime={props.value.fixedTime}
      />
      <div>
        <AddressBlock
          addressTitle={props.addressTitle}
          generalInput={props.generalInput}
          address={props.value.address}
          cargoDetails={props.value.cargoDetails}
          postCode={props.value.postCode}
          country={props.value.country}
          distance={props.value.distance}
          cargo={props.value.cargo}
          coordinates={props.value.coordinates}
          index={props.index}
        />
      </div>
      <div>
        <Cargo
          value={props.value.cargoDetails}
          index={props.index}
          generalInput={props.generalInput}
        />
        <Ref
          value={props.value.comments}
          index={props.index}
          generalInput={props.generalInput}
        />
      </div>
    </div>
  );
};

export default OrderFields;
