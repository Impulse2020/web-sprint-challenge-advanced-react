import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "../components/CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);   
    const header = screen.getByText(/checkout form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    //render form
    render(<CheckoutForm />);
    //get inputs
    const FNinput = screen.getByLabelText(/first name/i);
    const LNinput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    //send in the dummy data!
    fireEvent.change(FNinput, {target:{value:"Jeff"}});
    fireEvent.change(LNinput, {target:{value:"Gallion"}});
    fireEvent.change(addressInput, {target:{value:"9880"}});
    fireEvent.change(cityInput, {target:{value:"Mentor"}});
    fireEvent.change(stateInput, {target:{value:"Ohio"}});
    fireEvent.change(zipInput, {target:{value:"44060"}});
    //gotta grab dat button
    const submitBtn = screen.getByRole("button");
    //click dah button
    fireEvent.click(submitBtn);
    //okay what happens when you click the button?
    expect(screen.getByText(/jeff/i)).toBeInTheDocument();

});
