import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddUser from "./AddUser";

describe("AddUser component", () => {
  test("correctly listens for username change", () => {
    render(<AddUser />);
    const usernameInput = screen.getByLabelText("Username"); // Find input element
    fireEvent.change(usernameInput, { target: { value: "Test Username" } }); // Simulate user input
    expect(usernameInput.value).toBe("Test Username"); // Verify if the input value is set correctly
  });

  test("correctly listens for age change", () => {
    render(<AddUser />);
    const ageInput = screen.getByLabelText("Age"); // Find input element
    fireEvent.change(ageInput, { target: { value: "20" } }); // Simulate user input
    expect(ageInput.value).toBe("20"); // Verify if the input value is set correctly
  });

  test("logs entered username and age to console on form submission", () => {
    const originalConsoleLog = console.log; // Mock console.log
    console.log = jest.fn();
    render(<AddUser />);
    const addButton = screen.getByText("Add User");

    const usernameInput = screen.getByLabelText("Username");
    const ageInput = screen.getByLabelText("Age");

    fireEvent.change(usernameInput, { target: { value: "Test Username" } });
    fireEvent.change(ageInput, { target: { value: "20" } });
    fireEvent.click(addButton);

    expect(console.log).toHaveBeenCalledWith("Test Username", "20");
    console.log = originalConsoleLog; // Restore original console.log
  });

  test("resets the form after submission", () => {
    const submitHandler = jest.fn();
    render(<AddUser />);
    const addButton = screen.getByText("Add User");
    addButton.onclick = submitHandler;

    const usernameInput = screen.getByLabelText("Username");
    const ageInput = screen.getByLabelText("Age");

    fireEvent.change(usernameInput, { target: { value: "Test Username" } });
    fireEvent.change(ageInput, { target: { value: "20" } });
    fireEvent.click(addButton);

    expect(submitHandler).toHaveBeenCalledTimes(1);
    expect(usernameInput.value).toBe("");
    expect(ageInput.value).toBe("");
  });
});
