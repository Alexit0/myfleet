import Address from "./singleComponents/Address";
import PostCode from "./singleComponents/PostCode";
import Country from "./singleComponents/Country";
import Distance from "./singleComponents/Distance";
import Coordinates from "./singleComponents/Coordinates";

import classes from "./OrderForm.module.css";

const AddressBlock = ({ index, value, addressTitle, handleInput }) => {
  return (
    <>
      <div>
        <Address
          addressTitle={addressTitle}
          index={index}
          value={value.address}
          handleInput={handleInput}
        />
      </div>

      <div className={classes.address2}>
        <PostCode
          index={index}
          value={value.postCode}
          handleInput={handleInput}
        />
        <Country
          index={index}
          value={value.country}
          handleInput={handleInput}
        />
        <Distance
          index={index}
          value={value.distance}
          handleInput={handleInput}
        />
      </div>

      <div>
        <Coordinates
          index={index}
          value={value.coordinates}
          handleInput={handleInput}
        />
      </div>
    </>
  );
};

export default AddressBlock;
