import React from 'react';
import './App.css';

import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: false,
  }

  validationSaveButton = () => {
    ({
      cardName, cardImage, cardDescription, cardAttr1, cardAttr2, cardAttr3,
    } = this.state);

    totalSkillsValues = cardAttr1 + cardAttr2 + cardAttr3;
    if (cardName === ''
    || cardDescription === ''
    || cardImage === ''
    ) this.setState({ isSaveButtonDisabled: true });
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.validationSaveButton());
  }

  render() {
    return (
      <div>
        <h1 className="title">Tryunfo</h1>
        <div className="container">
          <Form { ...this.state } onInputChange={ this.onInputChange } />
          <Card { ...this.state } onInputChange={ this.onInputChange } />
        </div>
      </div>
    );
  }
}

export default App;
