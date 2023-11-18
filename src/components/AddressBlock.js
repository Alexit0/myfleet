import Address from "./singleComponents/Address";
import PostCode from "./singleComponents/PostCode";
import Country from "./singleComponents/Country";
import Distance from "./singleComponents/Distance";
import Coordinates from "./singleComponents/Coordinates";

import classes from "./OrderForm.module.css";

const AddressBlock = (props) => {
  return (
    <>
      <div>
        <Address
          addressTitle="unloading address"
          generalInput={props.generalInput}
          index={props.index}
          value={props.address}
        />
      </div>

      <div className={classes.address2}>
        <PostCode
          generalInput={props.generalInput}
          index={props.index}
          value={props.postCode}
        />
        <Country
          generalInput={props.generalInput}
          index={props.index}
          value={props.country}
        />
        <Distance
          generalInput={props.generalInput}
          index={props.index}
          value={props.distance}
        />
      </div>

      <div>
        <Coordinates
          generalInput={props.generalInput}
          index={props.index}
          value={props.coordinates}
        />
      </div>
    </>
  );
};

export default AddressBlock;
