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
          index={props.index}
        />
      </div>

      <div className={classes.address2}>
        <PostCode generalInput={props.generalInput} index={props.index} />
        <Country generalInput={props.generalInput} index={props.index} />
        <Distance generalInput={props.generalInput} index={props.index} />
      </div>

      <div>
        <Coordinates generalInput={props.generalInput} index={props.index} />
      </div>
    </>
  );
};

export default AddressBlock;
