import React, { useState } from 'react';
import { StyleGetLocation } from './StyleGetLocation';
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
// import ClientService from '../../services/ClientService';
// import LOCATION from './GetLocationQuery';
// import { useQuery } from '@apollo/client';

function GetLocation(props) {
    const [ address, setAdress ] = useState('');
    const [ formIsInvalid, setFormIsInvalid ] = useState(true);
    const [ latLng, setlatLng ] = useState({lat: '', lng: ''});
    const [ redirect, setRedirect ] = useState(false);

    // const { loading, error, data } = useQuery(LOCATION, {
    //     "algorithm": "NEAREST",
    //     "lat": "-23.632919",
    //     "long": "-46.699453",
    //     "now": "2017-08-01T20:00:00.000Z"
    // });

    // console.log('return', loading, error, data)

    const onSubmit = e => {
        e.preventDefault();
        localStorage.setItem('endereco', address);
        localStorage.setItem('lat', latLng.lat);
        localStorage.setItem('lng', latLng.lng);

        setRedirect(true);
    };

    const handleChange = address => {
        setAdress(address);
        setFormIsInvalid(false);
    };

    const handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                console.log('Success', latLng)
                
                setAdress(address);
                setFormIsInvalid(false);
                setlatLng(latLng);
            })
            .catch(error => console.error('Error', error));
    };

    return (
        <>
            { 
                redirect ? 
                    <Redirect to="produtos" /> 
                :
                    <StyleGetLocation>
                        <div className="container">
                            <img 
                                src="/images/zedeliverylogo.png"
                                className="logo"
                                alt="Zé Delivery de Bebidas"
                            />
                            <p>Digite seu endereço para localizarmos as melhores ofertas para você:</p>
                            <form onSubmit={onSubmit} className="form">
                                <FontAwesomeIcon icon="map-marker-alt" className="pin-icon" />
                                <PlacesAutocomplete
                                    value={address}
                                    onChange={handleChange}
                                    onSelect={handleSelect}
                                >
                                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                        <div>
                                            <input
                                                {...getInputProps({
                                                    placeholder: 'Digite aqui seu endereço',
                                                    className: 'search-location',
                                                })}
                                            />
                                            <div className="autocomplete-dropdown-container">
                                                {loading && <div>Carregando...</div>}
                                                {!loading && suggestions.map((suggestion, item) => {
                                                    const className = suggestion.active
                                                                        ? 'suggestion-item suggestion-item--active'
                                                                        : 'suggestion-item';
                                                    return (
                                                        <div
                                                            {...getSuggestionItemProps(suggestion, {
                                                                className
                                                            })}
                                                            key={suggestion.placeId}
                                                        >
                                                            {suggestion.description}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </PlacesAutocomplete>
                                <button className="use-search" disabled={formIsInvalid}>VER PRODUTOS</button>
                            </form>
                        </div>
                    </StyleGetLocation>
            }
        </>
    )
}

export default GetLocation;