import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddUser from "./AddUser";

describe("AddUser component", () => {
  test("does not log to console if either input field is empty", () => {
    const originalConsoleLog = console.log; // Mock console.log
    console.log = jest.fn();
    render(<AddUser />);
    const addButton = screen.getByText("Add User");

    // Only changing the username input, leaving age empty
    const usernameInput = screen.getByLabelText("Username");
    fireEvent.change(usernameInput, { target: { value: "Test Username" } });
    fireEvent.click(addButton);

    // Expect console.log not to have been called
    expect(console.log).not.toHaveBeenCalled();

    console.log = originalConsoleLog; // Restore original console.log
  });

  test("does not log to console if age is 0 or negative", () => {
    const originalConsoleLog = console.log; // Mock console.log
    console.log = jest.fn();
    render(<AddUser />);
    const addButton = screen.getByText("Add User");

    // Only changing the age input to 0
    const ageInput = screen.getByLabelText("Age");
    fireEvent.change(ageInput, { target: { value: "0" } });
    fireEvent.click(addButton);

    // Expect console.log not to have been called
    expect(console.log).not.toHaveBeenCalled();

    // Changing the age input to a negative value
    fireEvent.change(ageInput, { target: { value: "-5" } });
    fireEvent.click(addButton);

    // Expect console.log not to have been called
    expect(console.log).not.toHaveBeenCalled();

    console.log = originalConsoleLog; // Restore original console.log
  });
});
