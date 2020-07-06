import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

it("should display anagrams of given input", () => {
  const { getByText, getByLabelText } = render(<App />);

  const nameInput = getByLabelText(/name/i);
  fireEvent.change(nameInput, { target: { value: "ab" } });

  fireEvent.click(getByText(/submit/i));

  const expectedAnagrams = ["ab", "ba"];

  expectedAnagrams.forEach((anagram) => {
    expect(document.body.innerHTML).toMatch(anagram);
  });
});

it("should display anagrams of a different input", () => {
  const { getByText, getByLabelText } = render(<App />);

  const nameInput = getByLabelText(/name/i);
  fireEvent.change(nameInput, { target: { value: "cd" } });

  fireEvent.click(getByText(/submit/i));

  const expectedAnagrams = ["cd", "dc"];

  expectedAnagrams.forEach((anagram) => {
    expect(document.body.innerHTML).toMatch(anagram);
  });
});

it("should display anagrams of a third input", () => {
  const { getByText, getByLabelText } = render(<App />);

  const nameInput = getByLabelText(/name/i);
  fireEvent.change(nameInput, { target: { value: "ef" } });

  fireEvent.click(getByText(/submit/i));

  const expectedAnagrams = ["ef", "fe"];

  expectedAnagrams.forEach((anagram) => {
    expect(document.body.innerHTML).toMatch(anagram);
  });
});
