import React from 'react';
import EmptyState from '../EmptyState';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Given EmptyState Component', () => {
    it("Renders EmptyState correctly", () => {
        const { getByTestId } = render(<EmptyState />);
        expect(getByTestId('EmptyState')).toBeTruthy();
        expect(getByTestId('EmptyStateText')).toBeTruthy();
        expect(getByTestId('EmptyStateButton')).toBeTruthy();
    })
})