/* eslint-disable testing-library/no-node-access */
import fs from "fs";
import path from "path";
import "@testing-library/jest-dom/extend-expect";

describe("AddUser component", () => {
  test("imports the Button component and replaces the button element with it", () => {
    const filePath = path.join(__dirname, "AddUser.js");
    const fileContents = fs.readFileSync(filePath, "utf8");

    const regex1 = /<\s*Button\b[^>]*>[\s\S]*?<\s*\/\s*Button\s*>/;
    const regex2 = /<\s*\/\s*Button\s*>/;
    const regex3 = /\bButton\b/;

    expect(fileContents).toMatch(regex1);
    expect(fileContents).toMatch(regex2);
    expect(fileContents).toMatch(regex3);
  });
});
