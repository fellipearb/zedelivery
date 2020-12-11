import React from 'react';
import LocationButtonStyle from './LocationButtonStyle';

function LocationButton(props) {
    const { label, disabled } = props;

    return (
        <LocationButtonStyle data-testid="LocationButton" disabled={disabled}>{label}</LocationButtonStyle>
    )
}

export default LocationButton;