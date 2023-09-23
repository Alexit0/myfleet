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
        <Address
          addressTitle={props.addressTitle}
          generalInput={props.generalInput}
        />
      </div>

      <div className={classes.address2}>
        <PostCode generalInput={props.generalInput} />
        <Country generalInput={props.generalInput} />
        <Distance generalInput={props.generalInput} />
      </div>

      <div>
        <Coordinates generalInput={props.generalInput} />
      </div>
    </>
  );
};

export default AddressBlock;
