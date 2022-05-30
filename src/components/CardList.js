import React from 'react';
import PropTypes from 'prop-types';

class CardList extends React.Component {
  render() {
    const {
      card,
      onBtnExcludeClick,
    } = this.props;

    return (
      <div className="cardList">
        <p>{ card.cardName }</p>
        <p>{ card.cardDescription }</p>
        <img
          className="imageCardList"
          src={ card.cardImage }
          alt={ card.cardName }
        />
        <p>{ card.cardAttr1 }</p>
        <p>{ card.cardAttr2 }</p>
        <p>{ card.cardAttr3 }</p>
        <p>{ card.cardRare }</p>
        <div>
          { card.cardTrunfo && <div>Super Trunfo</div> }
        </div>
        <button
          type="button"
          data-testid="delete-button"
          onClick={ onBtnExcludeClick }
        >
          Excluir

        </button>
      </div>
    );
  }
}

CardList.propTypes = {
  card: PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  }).isRequired,
};

export default CardList;
