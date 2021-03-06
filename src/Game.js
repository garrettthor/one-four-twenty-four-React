import React, { Component } from 'react';
import Die from './Die';
import './Game.css';

class Game extends Component {
    static defaultProps = {
        faces: ['one','two','three','four','five','six']
    }

    constructor(props){
        super(props);
        this.state = {
            gameOver: false,
            pickOne: false,
            rolled: false,
            score: 0,
            one: false,
            four: false,
            die1: 'one',
            die2: 'two',
            die3: 'three',
            die4: 'four',
            die5: 'five',
            die6: 'six',
            value1: 1,
            value2: 2,
            value3: 3,
            value4: 4,
            value5: 5,
            value6: 6,
            hold1: false,
            hold2: false,
            hold3: false,
            hold4: false,
            hold5: false,
            hold6: false,
            permHold1: false,
            permHold2: false,
            permHold3: false,
            permHold4: false,
            permHold5: false,
            permhold6: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.holdOne = this.holdOne.bind(this);
        this.holdTwo = this.holdTwo.bind(this);
        this.holdThree = this.holdThree.bind(this);
        this.holdFour = this.holdFour.bind(this);
        this.holdFive = this.holdFive.bind(this);
        this.holdSix = this.holdSix.bind(this);
        this.handleEndTurn = this.handleEndTurn.bind(this);
    }

    handleClick(e) {
        if(this.state.hold1 === false){
            let rand1 = Math.floor(Math.random() * 6);
            this.setState({ die1: this.props.faces[rand1]});  
        };

        if(this.state.hold2 === false){
            let rand2 = Math.floor(Math.random() * 6);
            this.setState({ die2: this.props.faces[rand2]});
        };

        if(this.state.hold3 === false){
            let rand3 = Math.floor(Math.random() * 6);
            this.setState({ die3: this.props.faces[rand3]});
        };

        if(this.state.hold4 === false){
            let rand4 = Math.floor(Math.random() * 6);
            this.setState({ die4: this.props.faces[rand4]});
        };

        if(this.state.hold5 === false){
            let rand5 = Math.floor(Math.random() * 6);
            this.setState({ die5: this.props.faces[rand5]});
        };

        if(this.state.hold6 === false){
            let rand6 = Math.floor(Math.random() * 6);
            this.setState({ die6: this.props.faces[rand6]});
        };

        this.setState({ rolled: true})

    }

    holdOne(e){
        if(this.state.hold1 === false){
            this.setState({ hold1: true });
        } else {
            this.setState({ hold1: false });
        };


    }

    holdTwo(e){
        if(this.state.hold2 === false){
            this.setState({ hold2: true });
        } else {
            this.setState({ hold2: false });
        };
    }

    holdThree(e){
        if(this.state.hold3 === false){
            this.setState({ hold3: true });
        } else {
            this.setState({ hold3: false });
        };
    }

    holdFour(e){
        if(this.state.hold4 === false){
            this.setState({ hold4: true });
        } else {
            this.setState({ hold4: false });
        };
    }

    holdFive(e){
        if(this.state.hold5 === false){
            this.setState({ hold5: true });
        } else {
            this.setState({ hold5: false });
        };
    }

    holdSix(e){
        if(this.state.hold6 === false){
            this.setState({ hold6: true });
        } else {
            this.setState({ hold6: false });
        };
    }

    handleEndTurn(e) {
        if(this.state.hold1 === true){
            this.setState({ permHold1: true })
        }

        if(this.state.hold2 === true){
            this.setState({ permHold2: true })
        }
        
        if(this.state.hold3 === true){
            this.setState({ permHold3: true })
        }

        if(this.state.hold4 === true){
            this.setState({ permHold4: true })
        }

        if(this.state.hold5 === true){
            this.setState({ permHold5: true })
        }

        if(this.state.hold6 === true){
            this.setState({ permHold6: true })
        }
    }

    render(){
        return(
            <div>
                <h1>One Four Twenty Four</h1>
                <h2>Score: {this.state.score}</h2>
                <h3>One?</h3>
                <h3>Four?</h3>
                {this.state.gameOver ? "Game over" : <div className="Game-dice-area">
                    <div className="Game-die">
                        <Die face={`${this.state.die1}`} held={this.state.hold1}/>
                        {this.state.permHold1 ?
                            "PermHeld" 
                            : <button onClick={this.holdOne}>{this.state.hold1 ? 'Release' : 'Hold'}</button>
                        }
                    </div>
                    
                    <div className='Game-die'>
                        <Die face={`${this.state.die2}`} held={this.state.hold2}/>
                        {this.state.permHold2 ?
                            "PermHeld" 
                            : <button onClick={this.holdTwo}>{this.state.hold2 ? 'Release' : 'Hold'}</button>
                            }
                    </div>
                    
                    <div className='Game-die'>
                        <Die face={`${this.state.die3}`} held={this.state.hold3}/>
                        {this.state.permHold3 ?
                            "PermHeld"
                            : <button onClick={this.holdThree}>{this.state.hold3 ? 'Release' : 'Hold'}</button>
                        }
                    </div>
                    
                    <div className='Game-die'>
                        <Die face={`${this.state.die4}`} held={this.state.hold4}/>
                        {this.state.permHold4 ?
                            "PermHeld"
                            : <button onClick={this.holdFour}>{this.state.hold4 ? 'Release' : 'Hold'}</button>
                        }
                    </div>
                    
                    <div className='Game-die'>
                        <Die face={`${this.state.die5}`} held={this.state.hold5}/>
                        {this.state.permHold5 ? 
                            "PermHeld"
                            : <button onClick={this.holdFive}>{this.state.hold5 ? 'Release' : 'Hold'}</button>
                        }
                    </div>
                    
                    <div className='Game-die'>
                        <Die face={`${this.state.die6}`} held={this.state.hold6}/>
                        {this.state.permHold6 ?
                            "PermHeld"
                            : <button onClick={this.holdSix}>{this.state.hold6 ? 'Release' : 'Hold'}</button>
                        }
                    </div>
                    
                </div>}
                
                <div className='Game-button-area'>
                    <button onClick={this.handleClick}>Roll!</button>
                    <button onClick={this.handleEndTurn}>Confirm Hold(s), submit turn</button>
                </div>
                
            </div>
        )
    }
};

export default Game;