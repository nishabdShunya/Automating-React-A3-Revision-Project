import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddUser from "./AddUser";

describe("AddUser Component", () => {
  test("displays error modal with desired title and message when submitting with empty fields", () => {
    render(<AddUser />);
    fireEvent.click(screen.getByText(/add user/i));
    expect(screen.getByText(/invalid input/i)).toBeInTheDocument();
    expect(
      screen.getByText(/please enter a valid username and age/i)
    ).toBeInTheDocument();
  });

  test("displays error modal with desired title and message when entering invalid age", () => {
    render(<AddUser />);
    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "Max" },
    });
    fireEvent.change(screen.getByLabelText(/age/i), {
      target: { value: "0" },
    });
    fireEvent.click(screen.getByText(/add user/i));
    expect(screen.getByText(/invalid input/i)).toBeInTheDocument();
    expect(screen.getByText(/please enter a valid age/i)).toBeInTheDocument();
  });

  test("submits user data and calls onAddUser prop when inputs are valid", () => {
    const onAddUserMock = jest.fn();
    render(<AddUser onAddUser={onAddUserMock} />);

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/age/i), {
      target: { value: "25" },
    });
    fireEvent.click(screen.getByText(/add user/i));

    expect(onAddUserMock).toHaveBeenCalledWith("John", "25");
  });
});
