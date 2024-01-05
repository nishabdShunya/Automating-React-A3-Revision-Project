/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "./Button";

describe("Button Component", () => {
  it("renders button with children", () => {
    render(<Button>Hello</Button>);
    const button = screen.getByText("Hello");
    expect(button).toBeInTheDocument();
  });

  it("renders button with specified type", () => {
    render(<Button type="submit">Submit</Button>);
    const button = screen.getByText("Submit");
    expect(button).toHaveAttribute("type", "submit");
  });

  test("imports Button.css file and applies .button class", () => {
    jest.mock("./Button.css", () => ({})); // Mock the css file
    render(<Button>Test Content</Button>);
    const buttonElement = document.querySelector(".button");
    expect(buttonElement).toBeInTheDocument();
  });
});
