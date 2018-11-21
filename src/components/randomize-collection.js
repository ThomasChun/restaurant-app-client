import React from 'react';
import { connect } from 'react-redux';
import { randomizeCollection, setCollectionIdState, setCollectionNameState } from '../actions/collection';
import { fetchRestaurants, clearRestaurantId } from '../actions/restaurants';

class RandomizeCollection extends React.Component {
  handleClick(event) {
    event.preventDefault();
    // clears restaurantId so it doesn't throw error when you check on a restaurant then randomize button.
    this.props.dispatch(clearRestaurantId());
    let collectionNames = this.props.collections.map(collection => collection.name)
    let randomCollection = this.props.dispatch(randomizeCollection(this.randomize(collectionNames)));
    let winningCollectionName = (randomCollection.winningCollection)
    let targetCollection = this.props.collections.filter(collection => collection.name === randomCollection.winningCollection);
    this.props.dispatch(setCollectionNameState(winningCollectionName));
    this.props.dispatch(setCollectionIdState(targetCollection[0].id));
    this.props.dispatch(fetchRestaurants(targetCollection[0].id));
  }
  
  randomize(collections) {
    let currentIndex = collections.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = collections[currentIndex];
      collections[currentIndex] = collections[randomIndex];
      collections[randomIndex] = temporaryValue;
    }
    return collections[0];
  }

  render() {
    if (this.props.collections.length === 0) {
      return null;
    }
    return (
      <div>
        <h2>Randomize Collection</h2>
          <button
            type='submit'
            name='submit'
            id='randomizeCollectionButton'
            onClick={e => this.handleClick(e)}>
            Randomize!
          </button>
          <p>{this.props.winningCollection}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  collections: state.collection.collections,
  winningCollection: state.collection.winningCollection,
  currentCollectionId: state.collection.currentCollectionId,
});

export default connect(mapStateToProps)(RandomizeCollection);