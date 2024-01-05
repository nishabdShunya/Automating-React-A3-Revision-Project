/* eslint-disable testing-library/no-node-access */
import React from "react";
import fs from "fs";
import path from "path";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("AddUser component", () => {
  test("imports the correct css file and uses the correct class", () => {
    const { default: AddUser } = require("./AddUser");

    render(<AddUser />);

    const cardElement = screen.getByText("Add User").closest(".card");
    expect(cardElement).toHaveClass("card");
    expect(cardElement).toHaveClass("input");
  });

  test("imports the Card component and encloses the form with it", () => {
    const filePath = path.join(__dirname, "AddUser.js");
    const fileContents = fs.readFileSync(filePath, "utf8");

    const regex1 = /<\s*Card\b[^>]*>[\s\S]*?<\s*\/\s*Card\s*>/;
    const regex2 = /<\s*\/\s*Card\s*>/;
    const regex3 = /\bCard\b/;

    expect(fileContents).toMatch(regex1);
    expect(fileContents).toMatch(regex2);
    expect(fileContents).toMatch(regex3);
  });
});
