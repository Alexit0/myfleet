import Address from "./Address";
import PostCode from "./PostCode";
import Country from "./Country";
import Distance from "./Distance";
import Coordinates from "./Coordinates";

import classes from "./LoadingForm.module.css";

const AddressBlock = (props) => {
  return (
    <>
      <div className={classes.address1}>
        <Address addressTitle={props.addressTitle} />
      </div>

      <div className={classes.address2}>
        <PostCode />
        <Country />
        <Distance />
      </div>

      <div className={classes.coordinates}>
        <Coordinates />
      </div>
    </>
  );
};

export default AddressBlock;
