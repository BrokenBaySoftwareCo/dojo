import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import App from './App';

test('renders learn react link', () => {
  const {getByText} = render(<App/>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('should display anagrams of given input', () => {
  const {getByText, getByLabelText} = render(<App/>);
  
  const nameInput = getByLabelText(/name/i);
  fireEvent.change(nameInput, {target: {value: "biro"}});
  
  fireEvent.click(getByText(/submit/i));
  
  const expecteAnagrams = [
    'biro', 'bior', 'brio', 'broi', 'boir', 'bori',
    'ibro', 'ibor', 'irbo', 'irob', 'iobr', 'iorb',
    'rbio', 'rboi', 'ribo', 'riob', 'roib', 'robi',
    'obir', 'obri', 'oibr', 'oirb', 'orbi', 'orib'
  ];
  
  expecteAnagrams.forEach((anagram) => {
    expect(document.body.innerHTML).toMatch(anagram);
  })
});
