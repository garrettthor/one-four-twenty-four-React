import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    render(){
        return(
            <div>
                <i className={`fas fa-dice-${this.props.face} ${this.props.held ? 'held' : 'free'}`} ></i>
            </div>
        )
    }
}

export default Die;