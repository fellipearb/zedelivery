import React from 'react';
import LocationButtonStyle from './LocationButtonStyle';

function LocationButton(props) {
    const { label, disabled } = props;

    return (
        <LocationButtonStyle disabled={disabled}>{label}</LocationButtonStyle>
    )
}

export default LocationButton;