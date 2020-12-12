import React from 'react';
import LocationButton from '../LocationButton';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Given Location Button Component', () => {
  const defaultProps = {
      label: 'click me please',
      disabled: true
  };

  it("Renders location button correctly", () => {
    const { getByTestId } = render(<LocationButton {...defaultProps}></LocationButton>);
    expect(getByTestId('LocationButton')).toBeTruthy();
  })

  it("Renders location button with text", () => {
      const { getByTestId } = render(<LocationButton {...defaultProps}></LocationButton>);
      expect(getByTestId('LocationButton')).toHaveTextContent("click me please");
  })

  it("Renders location button disabled", () => {
    const { getByTestId } = render(<LocationButton {...defaultProps}></LocationButton>);
    expect(getByTestId('LocationButton')).toHaveAttribute('disabled');
  })
})