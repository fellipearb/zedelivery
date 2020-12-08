import React, { Component } from 'react';
import { StyleGetLocation } from './StyleGetLocation';
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
export class GetLocation extends Component {
    state = {
        address: '',
        location: '',
        formIsInvalid: true
    }

    onChangeField = e => { 
        this.setState({ 
            [e.target.name]: e.target.value,
            formIsInvalid: !e.target.value.length
        });
    }

    onSubmit = e => {
        e.preventDefault();
        localStorage.setItem('endereco', this.state.location);
        this.setState({ redirect: true });
    }

    handleChange = address => {
        this.setState({ address });
    };
     
    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
    };
    
    render() {
        const { redirect } = this.state;

        if(redirect) {
            return (<Redirect to="produtos" />)
        }

        return (
            <StyleGetLocation>
                <div className="container">
                    <img 
                        src="/images/zedeliverylogo.png"
                        className="logo"
                        alt="Zé Delivery de Bebidas"
                    />
                    <p>Digite seu endereço para localizarmos as melhores ofertas para você:</p>
                    <form onSubmit={this.onSubmit} className="form">
                        <FontAwesomeIcon icon="map-marker-alt" className="pin-icon" />
                        <PlacesAutocomplete
                            value={this.state.address}
                            onChange={this.handleChange}
                            onSelect={this.handleSelect}
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
                                        {loading && <div>Loading...</div>}
                                        {suggestions.map((suggestion, item) => {
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
                        <button className="use-search" disabled={this.state.formIsInvalid}>VER PRODUTOS</button>
                    </form>
                </div>
            </StyleGetLocation>
        )
    }
}

export default GetLocation;