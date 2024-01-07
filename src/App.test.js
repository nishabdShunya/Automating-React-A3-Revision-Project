import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("App component adds user to the usersList", () => {
  render(<App />);

  // Simulate data input in AddUser component
  fireEvent.change(screen.getByLabelText(/username/i), {
    target: { value: "John Doe" },
  });
  fireEvent.change(screen.getByLabelText(/age/i), {
    target: { value: "25" },
  });
  fireEvent.click(screen.getByText(/add user/i));

  // Check if user is added to usersList
  expect(screen.getByText(/john doe/i)).toBeInTheDocument();
  expect(screen.getByText(/25/i)).toBeInTheDocument();
});
