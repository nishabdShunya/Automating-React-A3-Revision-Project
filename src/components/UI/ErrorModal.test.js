/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ErrorModal from "./ErrorModal";

describe("ErrorModal Component", () => {
  test("renders error title correctly", () => {
    const title = "Test Error Title";
    render(<ErrorModal title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test("renders error message correctly", () => {
    const message = "This is a test error message.";
    render(<ErrorModal message={message} />);
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  test("invokes onConfirm when okay button or backdrop is clicked", () => {
    const onConfirmMock = jest.fn();
    render(<ErrorModal onConfirm={onConfirmMock} />);
    fireEvent.click(screen.getByText("Okay"));
    expect(onConfirmMock).toHaveBeenCalled();
  });
});
