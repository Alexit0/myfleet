import React from "react";
import UniversalForm from "../components/UniversalForm";
import { addForm, removeForm } from "../store/newOrderSlice";
import { useDispatch, useSelector } from "react-redux";

const YourPage = () => {
  const dispatch = useDispatch();
  const orderData = useSelector((state) => state.newOrder);

  const handleAddForm = (index) => {
    dispatch(addForm({ index }));
  };

  const handleRemoveForm = (index) => {
    dispatch(removeForm({ index }));
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        {orderData.map((form, index) => (
          <div key={index}>
            <UniversalForm />
            <button
              onClick={handleAddForm}
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
    </div>
  );
};

export default YourPage;
