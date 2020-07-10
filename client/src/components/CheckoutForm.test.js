import React from "react";
import { render, getByTestId } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(
        <h2>Checkout Form</h2>
    )
});

test("form shows success message on submit with form details", () => {
    const nameInput = getByTestId('name-input')
    const lastNameInput = getByTestId('lastName-input')
    const addressInput = getByTestId('address-input')
    const cityInput = getByTestId('city-input')
    const stateInput = getByTestId('state-input')
    const zipInput = getByTestId('zip-input')
    expect(nameInput).toBeTruthy();
    expect(lastNameInput).toBeTruthy();
    expect(addressInput).toBeTruthy();
    expect(cityInput).toBeTruthy();
    expect(stateInput).toBeTruthy();
    expect(zipInput).toBeTruthy();
    const successMessage = getByTestId('successmessage')
    expect(successMessage).toBeInTheDocument();
});
