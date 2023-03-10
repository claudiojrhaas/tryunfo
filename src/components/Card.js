import React from 'react';
import PropTypes from 'prop-types';

const imageDefault = (
  'https://static.netshoes.com.br/2.32.23/netshoesbr/images/ajax-loading.svg');

class Card extends React.Component {
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
    } = this.props;

    return (
      <div className="card">
        <p data-testid="name-card">
          { cardName }
        </p>

        <img
          className="cardImage"
          data-testid="image-card"
          src={ cardImage || imageDefault }
          alt={ cardName }
        />

        <p data-testid="description-card">
          { cardDescription }
        </p>

        <p data-testid="attr1-card">
          Attr 1:..........
          { cardAttr1 }
        </p>

        <p data-testid="attr2-card">
          Attr 2:..........
          { cardAttr2 }
        </p>

        <p data-testid="attr3-card">
          Attr 3:..........
          { cardAttr3 }
        </p>

        <p data-testid="rare-card">
          Raridade:
          { cardRare }
        </p>

        {
          cardTrunfo && <div data-testid="trunfo-card">Super Trunfo</div>
        }

      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
