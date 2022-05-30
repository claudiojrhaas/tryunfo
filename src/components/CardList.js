import React from 'react';
import PropTypes from 'prop-types';

class CardList extends React.Component {
  render() {
    const { cardImage, cardName } = this.props;
    return (
      <div>
        <img src={ cardImage } alt={ cardName } />
        <span>{ cardName }</span>
      </div>
    );
  }
}

CardList.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
};

export default CardList;
