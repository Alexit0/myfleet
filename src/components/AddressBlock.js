import Address from "./Address";
import PostCode from "./PostCode";
import Country from "./Country";
import Distance from "./Distance";
import Coordinates from "./Coordinates";

import classes from "./LoadingForm.module.css";

const AddressBlock = (props) => {
  return (
    <>
      <div>
        <Address addressTitle={props.addressTitle} />
      </div>

      <div className={classes.address2}>
        <PostCode />
        <Country />
        <Distance />
      </div>

      <div>
        <Coordinates />
      </div>
    </>
  );
};

export default AddressBlock;
