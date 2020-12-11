import React from 'react';
import Loading from '../Loading';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Given Loading Component', () => {
    it("Renders button correctly", () => {
        const { getByTestId } = render(<Loading />);
        expect(getByTestId('Loading')).toBeTruthy();
    })
})