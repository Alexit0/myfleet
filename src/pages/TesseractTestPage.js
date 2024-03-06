import React from "react";
import UniversalForm from "../components/UniversalForm";
import {
  addForm,
  removeForm,
  loadingInput,
  loadingImage,
} from "../store/newOrderSlice";
import { useDispatch, useSelector } from "react-redux";
import DisplayConvertedDateTime from "../components/singleComponents/DisplayConvertedDateTime";
import parseDateTimeString from "../utils/parseDateTimeString";

const YourPage = () => {
  const dispatch = useDispatch();
  const orderData = useSelector((state) => state.newOrder);
  console.log("orderData =>", orderData);

  const handleImageChange = ({ index, name, image }) => {
    dispatch(loadingImage({ index, name, image }));
  };

  const loadingInputHandle = ({ name, value, index }) => {
    dispatch(loadingInput({ name, value, index }));
  };

  const handleAddForm = (index) => {
    dispatch(addForm({ index }));
  };

  const handleRemoveForm = (index) => {
    dispatch(removeForm({ index }));
  };

  // New function to handle input changes from UniversalForm
  const handleInputChange = ({ name, value, index }) => {
    dispatch(loadingInput({ name, value, index }));
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        {orderData.map((singleForm, index) => (
          <div key={index}>
            <UniversalForm
              index={index}
              handleInput={loadingInputHandle}
              handleInputChange={handleInputChange} // Pass down the new handler
              value={singleForm}
              handleImage={handleImageChange}
            />
            <button
              onClick={() => handleAddForm(index)}
              className="knopf small pill standard"
            >
              Add
            </button>
            {orderData.length > 1 && (
              <button
                onClick={() => handleRemoveForm(index)}
                className="knopf small pill standard"
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>
      <p>Order info:</p>
      {orderData.map((singleForm, index) => (
        <div key={index}>
          <DisplayConvertedDateTime
            formattedDateTime={parseDateTimeString(singleForm.dateTime)}
            type={singleForm.type}
            address={singleForm.address.value}
            comments={singleForm.comments.value}
            coordinates={singleForm.coordinates}
          />
        </div>
      ))}
    </div>
  );
};

export default YourPage;
