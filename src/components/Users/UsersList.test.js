import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UsersList from "./UsersList";

test("new user is also rendered in the user list", () => {
  const users = [
    { name: "John", age: 25, id: "1" },
    { name: "Alice", age: 30, id: "2" },
  ];

  render(<UsersList users={users} />);

  // Check if UsersList component is rendered
  expect(screen.getByText(/John/i)).toBeInTheDocument(); // Use a case-insensitive regex match

  // Check if each user is rendered in the list
  users.forEach((user) => {
    expect(
      screen.getByText(new RegExp(`${user.age} years old`))
    ).toBeInTheDocument();
  });
});
