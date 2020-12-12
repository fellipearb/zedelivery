import React from 'react';
import EmptyStateStyle from './EmptyStateStyle';

function EmptyState() {
    return (
        <EmptyStateStyle data-testid="EmptyState">
            <p data-testid="EmptyStateText">Nenhum produto encontrado :(</p>
        </EmptyStateStyle>
    )
}

export default EmptyState;
