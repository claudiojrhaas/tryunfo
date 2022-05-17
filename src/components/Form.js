import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <label htmlFor="card-name">
          Nome da Carta
          <input
            id="card-name"
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ this.onInputChange }
          />
        </label>

        <label htmlFor="card-description">
          Descrição da carta
          <input
            id="card-description"
            type="textarea"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ this.onInputChange }
          />
        </label>

        <label htmlFor="card-attr1">
          Attr 1
          <input
            id="card-attr1"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ this.onInputChange }
          />
        </label>

        <label htmlFor="card-attr2">
          Attr 2
          <input
            id="card-attr2"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ this.onInputChange }
          />
        </label>

        <label htmlFor="card-attr3">
          Attr 3
          <input
            id="card-attr3"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ this.onInputChange }
          />
        </label>

        <label htmlFor="card-image">
          Imagem
          <input
            id="card-image"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ this.onInputChange }
          />
        </label>

        <label htmlFor="card-rare">
          Raridade
          <select
            id="card-rare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ this.onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="card-trunfo">
          Super-Trunfo
          <input
            id="card-trunfo"
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ this.onInputChange }
          />
        </label>

        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
