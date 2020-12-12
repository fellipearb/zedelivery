import React from 'react';
import ProductCard from '../ProductCard';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Given Product Card Component', () => {
    const defaultProps = {
        card: {
            images: [
                { url: '' },
                { url: '' }
            ],
            productVariants: [
                { price: 22.90 }
            ],
            alreadyAdd: true
        },
        removeCart: jest.fn(),
        addToCart: jest.fn()
    };

    it("Renders product card correctly", () => {
        const { getByTestId } = render(<ProductCard {...defaultProps}></ProductCard>);
        expect(getByTestId('ProductCard')).toBeTruthy();
        expect(getByTestId('ProductCardImage')).toBeTruthy();
        expect(getByTestId('ProductCardName')).toBeTruthy();
        expect(getByTestId('ProductCardPrice')).toBeTruthy();
        expect(getByTestId('ProductCardButton')).toBeTruthy();
    })
})