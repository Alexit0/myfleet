import React from "react";
import Date from "./Date";
import Time from "./Time";
import FixedTerm from "./FixedTerm";
import Address from "./Address";
import Coordinates from "./Coordinates";
import Cargo from "./Cargo";
import Ref from "./Ref";
const LoadingForm = () => {
  return (
    <form>
      <Date />
      <Time />
      <FixedTerm />
      <Address />
      <Coordinates />
      <Address />
      <Cargo />
      <Ref />
    </form>
  );
};

export default LoadingForm;
