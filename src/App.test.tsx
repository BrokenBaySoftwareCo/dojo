import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('should display "Hello, Tim." after entering name', () => {
  const { getByText, getByLabelText } = render(<App />);

  const nameInput = getByLabelText(/name/i);
  fireEvent.change(nameInput, { target: { value: "Tim" } });

  fireEvent.click(getByText(/submit/i));

  const expectedMessage = "Hello, Tim.";
  expect(getByText(expectedMessage)).toBeDefined();
});
