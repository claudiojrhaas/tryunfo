import React from 'react';
import './App.css';

import Form from './components/Form';
import Card from './components/Card';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
};

class App extends React.Component {
  state = {
    ...INITIAL_STATE,
    cards: [],
  }

  validateSaveButton = () => {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const attr1 = parseInt(cardAttr1, 10);
    const attr2 = parseInt(cardAttr2, 10);
    const attr3 = parseInt(cardAttr3, 10);
    const maxAttr = 90;
    const sumAttr = attr1 + attr2 + attr3;
    const maxTotalAttr = 210;

    if (cardName.length > 0
    && cardDescription.length > 0
    && cardImage.length > 0
    && attr1 >= 0 && attr2 >= 0 && attr3 >= 0
    && attr1 <= maxAttr && attr2 <= maxAttr && attr3 <= maxAttr
    && sumAttr <= maxTotalAttr
    ) this.setState({ isSaveButtonDisabled: false });
    else { this.setState({ isSaveButtonDisabled: true }); }
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.validateSaveButton());
  }

  // handleClearState = () => {
  //   this.SetState({ ...INITIAL_STATE }),
  // }

  // Continuar o video no minuto 28
  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    this.setState((prevState) => ({
      cards: [
        ...prevState.cards,
        {
          cardName,
          cardDescription,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardImage,
          cardRare,
          cardTrunfo,
        },
      ],
    }),
    () => this.handleClearState());
  }

  render() {
    return (
      <div>
        <h1 className="title">Tryunfo</h1>
        <div className="container">
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            { ...this.state }
            onInputChange={ this.onInputChange }
          />
        </div>
      </div>
    );
  }
}

export default App;
