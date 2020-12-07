import React, { Component } from 'react';
import { BgLocation } from './StyleGetLocation';
import { Redirect } from "react-router-dom";

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
            <BgLocation>
                <div className="container">
                    <img 
                        src="/images/zedeliverylogo.png"
                        className="container__logo"
                        alt="Zé Delivery de Bebidas"
                    />
                    Digite seu endereço para localizarmos as melhores ofertas para você:
                    <form onSubmit={this.onSubmit} className="container__form">
                        <input 
                            name="location" 
                            value={this.state.location} 
                            onChange={this.onChangeField}
                            placeholder="Digite aqui seu endereço"
                            className="container__search-location"
                        />
                        <button className="container__use-search" disabled={this.state.formIsInvalid}>VER PRODUTOS</button>
                    </form>
                </div>
            </BgLocation>
        )
    }
}

export default GetLocation;