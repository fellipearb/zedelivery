import React from 'react';
import EmptyStateStyle from './EmptyStateStyle';
import { Link } from 'react-router-dom';

function EmptyState(props) {
    const { withGoBack } = props;
    
    return (
        <EmptyStateStyle data-testid="EmptyState">
            <p data-testid="EmptyStateText">Nenhum produto encontrado :(</p>

            { withGoBack ? <Link to="/" className="changeLocation" data-testid="EmptyStateButton">Alterar localização</Link> : '' }
        </EmptyStateStyle>
    )
}

export default EmptyState;
