import React, { Component } from 'react';
import { StyleGetLocation } from './StyleGetLocation';
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class GetLocation extends Component {
    state = {
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
                        <input 
                            name="location" 
                            value={this.state.location} 
                            onChange={this.onChangeField}
                            placeholder="Digite aqui seu endereço"
                            className="search-location"
                        />
                        <button className="use-search" disabled={this.state.formIsInvalid}>VER PRODUTOS</button>
                    </form>
                </div>
            </StyleGetLocation>
        )
    }
}

export default GetLocation;