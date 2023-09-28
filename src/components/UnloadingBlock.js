import React from "react";

import DateTimeBlock from "./DateTimeBlock";
import AddressBlock from "./AddressBlock";
import CommentsBlock from "./CommentsBlock";

const UnloadingBlock = () => {
  return (
    <div>
      <DateTimeBlock dateTitle="Unloading Date" />
      <AddressBlock addressTitle="unloading address" />
      <CommentsBlock />
    </div>
  );
};

export default UnloadingBlock;
