import React from "react";
import UniversalForm from "../components/UniversalForm";
import { addForm, removeForm, loadingInput } from "../store/newOrderSlice";
import { useDispatch, useSelector } from "react-redux";
import DisplayConvertedDateTime from "../components/singleComponents/DisplayConvertedDateTime";
import parseDateTimeString from "../utils/parseDateTimeString";

const YourPage = () => {
  const dispatch = useDispatch();
  const orderData = useSelector((state) => state.newOrder);
  console.log(orderData);

  const loadingInputHandle = ({ name, value, index }) => {
    dispatch(loadingInput({ name, value, index }));
  };

  const handleAddForm = (index) => {
    dispatch(addForm({ index }));
  };

  const handleRemoveForm = (index) => {
    dispatch(removeForm({ index }));
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        {orderData.map((singleForm, index) => (
          <div key={index}>
            <UniversalForm
              index={index}
              handleInput={loadingInputHandle}
              value={singleForm}
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
      {/* Render DisplayConvertedDateTime for each orderData entry */}
      {orderData.map((singleForm, index) => (
        <div key={index}>
          {/* Pass 'type' to DisplayConvertedDateTime */}
          <DisplayConvertedDateTime
            formattedDateTime={parseDateTimeString(singleForm.dateTime)}
            type={singleForm.type}
            address={singleForm.address}
            comments={singleForm.comments}
            coordinates={singleForm.coordinates}
          />
        </div>
      ))}
    </div>
  );
};

export default YourPage;
