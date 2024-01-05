/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "./Card";

describe("Card component", () => {
  test("renders children correctly", () => {
    const testText = "Test Content";
    render(<Card>{testText}</Card>);
    const cardElement = screen.getByText(testText);
    expect(cardElement).toBeInTheDocument();
  });

  test("imports Card.css file and applies .card class", () => {
    jest.mock("./Card.css", () => ({})); // Mock the css file
    render(<Card>Test Content</Card>);
    const cardElement = document.querySelector(".card");
    expect(cardElement).toBeInTheDocument();
  });

  test("correctly applies the class received from AddUser component", () => {
    const customClass = "custom-class";
    render(<Card className={customClass}>Test Content</Card>);
    const cardElement = screen.getByText("Test Content").closest(".card");
    expect(cardElement).toHaveClass(customClass);
  });
});
