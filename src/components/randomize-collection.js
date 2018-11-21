import React from 'react';
import { connect } from 'react-redux';
import { randomizeCollection, setCollectionIdState } from '../actions/collection';

class RandomizeCollection extends React.Component {
  handleClick(event) {
    event.preventDefault();
    let collectionNames = this.props.collections.map(collection => collection.name)
    let randomCollection = this.props.dispatch(randomizeCollection(this.randomize(collectionNames)));
    console.log(randomCollection)
    this.props.dispatch(setCollectionIdState(randomCollection));
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