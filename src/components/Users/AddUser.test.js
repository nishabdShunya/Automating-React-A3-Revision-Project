import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddUser from "./AddUser";

test("form submission passes the user data to App component", () => {
  const submitHandler = jest.fn();
  const onAddUserMock = jest.fn();
  render(<AddUser onAddUser={onAddUserMock} />);
  const addButton = screen.getByText("Add User");
  addButton.onclick = submitHandler;

  const usernameInput = screen.getByLabelText("Username");
  const ageInput = screen.getByLabelText("Age");

  fireEvent.change(usernameInput, { target: { value: "Test Username" } });
  fireEvent.change(ageInput, { target: { value: "20" } });
  fireEvent.click(addButton);

  expect(submitHandler).toHaveBeenCalledTimes(1);
  expect(onAddUserMock).toHaveBeenCalledWith("Test Username", "20");
});
