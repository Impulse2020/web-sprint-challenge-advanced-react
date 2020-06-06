// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import MutationObserver from "@sheerun/mutationobserver-shim";

const nameInput = getByTestId('name-input')
const lastNameInput = getByTestId('lastName-input')
const addressInput = getByTestId('address-input')
const cityInput = getByTestId('city-input')
const stateInput = getByTestId('state-input')
const zipInput = getByTestId('zip-input')

expect(nameInput).toBeValid()
expect(lastNameInput).toBeValid()
expect(addressInput).toBeValid()
expect(cityInput).toBeValid()
expect(stateInput).toBeValid()
expect(zipInput).toBeValid()

window.MutationObserver = MutationObserver