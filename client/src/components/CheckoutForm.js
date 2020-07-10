import React, { useState } from "react";
import useForm from "../hooks/useForm";

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook




const CheckoutForm = (props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [firstName, setFirstName, handleFirstName] = useForm("");
  const [lastName, setLastName, handleLastName] = useForm("");
  const [address, setAddress, handleAddress] = useForm("");
  const [city, setCity, handleCity] = useForm("");
  const [state, setState, handleState] = useForm("");
  const [zip, setZip, handleZip] = useForm("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={firstName}
            onChange={handleFirstName}
            data-testid = "name-input"
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={lastName}
            onChange={handleLastName}
            data-testid = "lastName-input"
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={address}
            onChange={handleAddress}
            data-testid = "address-input"
          />
        </label>
        <label>
          City:
          <input name="city" value={city} onChange={handleCity} data-testid = "name-city" data-testid ="city-input" />
        </label>
        <label>
          State:
          <input name="state" value={state} onChange={handleState} data-testid = "state-input" />
        </label>
        <label>
          Zip:
          <input name="zip" value={zip} onChange={handleZip} data-testid = "zip-input" />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {firstName} {lastName}
          </p>
          <p>{address}</p>
          <p>
            {city}, {state} {zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
