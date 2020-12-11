import React from 'react';
import CategoryButton from '../CategoryButton';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Given Categoy Button Component', () => {
    const defaultProps = {
        label: 'click me please',
        filterCategory: jest.fn()
    };

    it("Renders button correctly", () => {
        const { getByTestId } = render(<CategoryButton {...defaultProps}></CategoryButton>);
        expect(getByTestId('CategoryButton')).toBeTruthy();
    })

    it("Renders button with text", () => {
        const { getByTestId } = render(<CategoryButton {...defaultProps}></CategoryButton>);
        expect(getByTestId('CategoryButton')).toHaveTextContent("click me please");
    })
})