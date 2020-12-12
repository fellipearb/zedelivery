import React from 'react';
import Cart from '../Cart';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Given Cart Component', () => {
    const defaultProps = {
        cartItems: [],
        filterCategory: jest.fn()
    };

    it("Renders Cart correctly", () => {
        const { getByTestId } = render(<Cart {...defaultProps} />);
        expect(getByTestId('Cart')).toBeTruthy();
        expect(getByTestId('CartCount')).toBeTruthy();
        expect(getByTestId('CartIcon')).toBeTruthy();
    })
})