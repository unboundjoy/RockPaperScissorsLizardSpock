import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleClickRock = this.handleClickRock.bind(this);
    this.handleClickPaper = this.handleClickPaper.bind(this);
    this.handleClickScissors = this.handleClickScissors.bind(this);
    this.handleClickLizard = this.handleClickLizard.bind(this);
    this.handleClickSpock = this.handleClickSpock.bind(this);
    this.getRandom = this.getRandom.bind(this);
  }
  getRandom() {
    const guess = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
    const rand = guess[Math.floor(Math.random() * guess.length)];
    return rand;
  }

  handleClickRock() {
    this.setState(state => ({
      value: 'Rock'
    }));
    this.getRandom();
    if (this.getRandom() === 'Paper') {
      alert('Paper covers rock! You lose!');
      return;
    }
    if (this.getRandom() === 'Lizard') {
      alert('Rock crushes lizard! You win!');
      return;
    }
    if (this.getRandom() === 'Rock') {
      alert('Draw!');
      return;
    }
    if (this.getRandom() === 'Scissors') {
      alert('Rock crushes scissors! You win!');
      return;
    }
    if (this.getRandom() === 'Spock') {
      alert('Paper disproves Spock! You lose!');
      return;
    }
  }

  handleClickPaper() {
    this.setState(state => ({
      value: 'Paper'
    }));
    this.getRandom();
    if (this.getRandom() === 'Paper') {
      alert('Draw!');
      return;
    }
    if (this.getRandom() === 'Lizard') {
      alert('Lizard eats paper! You lose!');
      return;
    }
    if (this.getRandom() === 'Rock') {
      alert('Paper covers rock! You lose!');
      return;
    }
    if (this.getRandom() === 'Scissors') {
      alert('Scissors cuts paper! You lose!');
      return;
    }
    if (this.getRandom() === 'Spock') {
      alert('Paper disproves Spock! You lose!');
      return;
    }
  }

  handleClickScissors() {
    this.setState(state => ({
      value: 'Scissors'
    }));
    this.getRandom();
    if (this.getRandom() === 'Paper') {
      alert('Scissors cuts paper! You win!');
      return;
    }
    if (this.getRandom() === 'Lizard') {
      alert('Scissors decapitates lizard! You win!');
      return;
    }
    if (this.getRandom() === 'Rock') {
      alert('Rock crushes scissors! You lose!');
      return;
    }
    if (this.getRandom() === 'Scissors') {
      alert('Draw!');
      return;
    }
    if (this.getRandom() === 'Spock') {
      alert('Spock smashes scissors! You lose!');
      return;
    }
  }

  handleClickLizard() {
    this.setState(state => ({
      value: 'Lizard'
    }));
    this.getRandom();
    if (this.getRandom() === 'Paper') {
      alert('Lizard eats paper! You lose!');
      return;
    }
    if (this.getRandom() === 'Lizard') {
      alert('Draw!');
      return;
    }
    if (this.getRandom() === 'Rock') {
      alert('Rock crushes lizard! You lose!');
      return;
    }
    if (this.getRandom() === 'Scissors') {
      alert('Scissors decapitates lizard! You lose!');
      return;
    }
    if (this.getRandom() === 'Spock') {
      alert('Lizard poisons Spock! You win!');
      return;
    }
  }

  handleClickSpock() {
    this.setState(state => ({
      value: 'Spock'
    }));
    this.getRandom();
    if (this.getRandom() === 'Paper') {
      alert('Paper disproves Spock! You lose!');
      return;
    }
    if (this.getRandom() === 'Lizard') {
      alert('Lizard poisons Spock! You lose!');
      return;
    }
    if (this.getRandom() === 'Rock') {
      alert('Spock vaporizes rock! You win!');
      return;
    }
    if (this.getRandom() === 'Scissors') {
      alert('Spock smashes scissors! You win!');
      return;
    }
    if (this.getRandom() === 'Spock') {
      alert('Draw!');
      return;
    }
  }

  render() {
    return (
      <div>
        <h1>Hello, friend... Let's play a game.</h1>
        <button onClick={this.handleClickRock}>Rock</button>
        <button onClick={this.handleClickPaper}>Paper</button>
        <button onClick={this.handleClickScissors}>Scissors</button>
        <button onClick={this.handleClickLizard}>Lizard</button>
        <button onClick={this.handleClickSpock}>Spock</button>
      </div>
    );
  }
}

export default App;
