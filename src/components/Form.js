import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="card-name">
          Nome da Carta
          <input
            id="card-name"
            type="text"
            data-testid="name-input"
          />
        </label>

        <label htmlFor="card-description">
          Descrição da carta
          <input
            id="card-description"
            type="textarea"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="card-attr1">
          Attr 1
          <input
            id="card-attr1"
            type="number"
            data-testid="attr1-input"
          />
        </label>

        <label htmlFor="card-attr2">
          Attr 2
          <input
            id="card-attr2"
            type="number"
            data-testid="attr2-input"
          />
        </label>

        <label htmlFor="card-attr3">
          Attr 3
          <input
            id="card-attr3"
            type="number"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="card-image">
          Imagem
          <input
            id="card-image"
            type="text"
            data-testid="image-input"
          />
        </label>

        <label htmlFor="card-rare">
          Raridade
          <select
            id="card-rare"
            data-testid="rare-input"
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
          />
        </label>

        <button
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>

      </form>
    );
  }
}

export default Form;
