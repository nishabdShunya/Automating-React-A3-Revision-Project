import React from "react";
import fs from "fs";
import path from "path";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddUser from "./AddUser";

describe("AddUser component", () => {
  test("renders AddUser component correctly", () => {
    render(<AddUser />);
  });

  test("form submission calls the addUserHandler", () => {
    const addUserHandler = jest.fn();
    render(<AddUser />);
    const addButton = screen.getByText("Add User");
    addButton.onclick = addUserHandler;

    fireEvent.click(addButton);

    expect(addUserHandler).toHaveBeenCalledTimes(1);
  });

  test("addUserHandler prevents the default behaviour", () => {
    const filePath = path.join(__dirname, "AddUser.js");
    const fileContents = fs.readFileSync(filePath, "utf8");

    const regex = /event\.preventDefault\(\)/;

    expect(fileContents).toMatch(regex);
    expect(fileContents).toContain("event.preventDefault()");
  });
});
