import Address from "./singleComponents/Address";
import PostCode from "./singleComponents/PostCode";
import Country from "./singleComponents/Country";
import Distance from "./singleComponents/Distance";
import Coordinates from "./singleComponents/Coordinates";

import classes from "./OrderForm.module.css";

const AddressBlock = ({ index, value, addressTitle }) => {
  return (
    <>
      <div>
        <Address
          addressTitle={addressTitle}
          index={index}
          value={value.address}
        />
      </div>

      <div className={classes.address2}>
        <PostCode index={index} value={value.postCode} />
        <Country index={index} value={value.country} />
        <Distance index={index} value={value.distance} />
      </div>

      <div>
        <Coordinates index={index} value={value.coordinates} />
      </div>
    </>
  );
};

export default AddressBlock;
