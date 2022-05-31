import React from 'react';
import './App.css';

import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
};

class App extends React.Component {
  state = {
    ...INITIAL_STATE,
    cards: [],
    searchFilterName: '',
    searchFilterRare: 'todas',
    searchFilterTrunfo: false,
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

  checkTrunfo = () => {
    const { cards } = this.state;
    const response = cards.some((trunfo) => trunfo.cardTrunfo === true);
    this.setState({ hasTrunfo: response });
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.validateSaveButton());
  }

  handleClearState = () => {
    this.setState({ ...INITIAL_STATE },
      () => this.checkTrunfo());
  }

  onBtnExcludeClick = (index) => {
    const { cards } = this.state;
    cards.splice(index, 1);
    this.setState({ cards }, () => this.checkTrunfo());
  }

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
    this.setState(
      (prevState) => ({
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
      () => this.handleClearState(),
    );
  }

  render() {
    const { cards, searchFilterName, searchFilterRare } = this.state;

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
        <div>
          Todas as Cartas
          <label htmlFor="searchFilterName">
            Filtros de busca
            <input
              name="searchFilterName"
              type="text"
              placeholder="Nome da Carta"
              data-testid="name-filter"
              value={ searchFilterName }
              onChange={ this.onInputChange }
            />
          </label>
          <label htmlFor="searchFilterRare">
            <select
              name="searchFilterRare"
              type="select"
              data-testid="rare-filter"
              value={ searchFilterRare }
              onChange={ this.onInputChange }
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="searchFilterTrunfo">
            Super Trunfo
            <input
              type="checkbox"
              name="searchFilterTrunfo"
              data-testid="trunfo-filter"
              onClick={ this.onInputChange }
            />
          </label>
          { cards ? (
            <span>
              { cards
                .filter((name) => name.cardName.includes(searchFilterName))
                .filter((rare) => (
                  (searchFilterRare === 'todas') ? true
                    : (rare.cardRare === searchFilterRare)))
                .map((card, index) => (
                  <CardList
                    key={ index }
                    card={ card }
                    { ...this.state }
                    onBtnExcludeClick={ this.onBtnExcludeClick }
                  />
                )) }
            </span>
          ) : (
            <span>Nenhuma carta adicionada</span>
          )}
        </div>
      </div>
    );
  }
}

export default App;
