import React from "react";

import OrderFields from "./OrderFields";

const UnloadingPlaceBlock = (props) => {
  return (
    <div>
      <OrderFields
        value={props.value}
        dateTitle="Unloading Date"
        addressTitle="unloading address"
        generalInput={props.generalInput}
        index={props.index}
      />
    </div>
  );
};

export default UnloadingPlaceBlock;
