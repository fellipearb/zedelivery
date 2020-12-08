import React, { useState } from 'react';
import { StyleGetLocation } from './StyleGetLocation';
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import ClientService from '../../services/ClientService';
import LOCATION from './GetLocationQuery';
import { useLazyQuery } from '@apollo/client';

function GetLocation(props) {
    const [ address, setAdress ] = useState('');
    const [ formIsInvalid, setFormIsInvalid ] = useState(true);
    const [ latLng, setlatLng ] = useState({lat: '', lng: ''});
    const [ redirect, setRedirect ] = useState(false);

    const date = new Date();

    const onSubmit = e => {
        e.preventDefault();
        localStorage.setItem('endereco', address);
        localStorage.setItem('lat', latLng.lat);
        localStorage.setItem('lng', latLng.lng);

        searchProducts();

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
    
    const teste = () => {
        console.log('teste')
        return <p>loaded</p>
    }

    const [
        searchProducts, 
        { error, loading, data }
    ] = useLazyQuery(LOCATION, {
        "client": ClientService,
        onCompleted: teste,
        variables: {
            "now": date.toISOString(),
            "algorithm": "NEAREST",
            "lat": "-23.632919",
            "long": "-46.699453"
        }
    });

    if(loading) return <p>loading</p>;
    if (data) {
        return <p>loaded</p>
    }

    if(error) return <p>error when fetch data</p>;

    console.log('return', loading, error, data)

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