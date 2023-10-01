import React from "react";

import DateTimeBlock from "./DateTimeBlock";
import AddressBlock from "./AddressBlock";
import CommentsBlock from "./CommentsBlock";

const UnloadingBlock = (props) => {
  return (
    <div>
      <DateTimeBlock
        dateTitle="Unloading Date"
        generalInput={props.generalInput}
        index={props.index}
      />
      <AddressBlock
        addressTitle="unloading address"
        generalInput={props.generalInput}
        index={props.index}
      />
      <CommentsBlock generalInput={props.generalInput} index={props.index} />
    </div>
  );
};

export default UnloadingBlock;
