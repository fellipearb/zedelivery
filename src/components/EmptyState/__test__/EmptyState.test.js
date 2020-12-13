import React from 'react';
import EmptyState from '../EmptyState';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

describe('Given EmptyState Component', () => {
    const defaultProps = {
        withGoBack: true
    }
    
    it("Renders EmptyState correctly", () => {
        const { getByTestId } = render(<EmptyState />);
        expect(getByTestId('EmptyState')).toBeTruthy();
        expect(getByTestId('EmptyStateText')).toBeTruthy();
    })

    it("Renders EmptyState with button", () => {
        const tree = renderer
                        .create(
                            <Router>
                                <EmptyState {...defaultProps} />
                            </Router>
                        )
                        .toJSON();
        expect(tree).toBeTruthy();
        expect(tree).toBeTruthy();
        expect(tree).toBeTruthy();
    })
})