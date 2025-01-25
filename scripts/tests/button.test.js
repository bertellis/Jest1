/**
 * @jest-environment jsdom
 */
const buttonClick = require("../button");

beforeEach(() => {
    let fs = require("fs");
    let fileContent = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContent);
    document.close();
});

describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
    test("H1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});