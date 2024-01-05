import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("App component", () => {
  test("is rendered correctly", () => {
    render(<App />);
  });

  test("renders the AddUser component", () => {
    render(<App />);
    const addUserButton = screen.getByText(/add user/i);
    expect(addUserButton).toBeInTheDocument();
  });
});
