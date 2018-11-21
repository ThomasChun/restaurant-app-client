import React from 'react';
import { connect } from 'react-redux';
import { setRestaurantNameState, setRestaurantIdState } from '../actions/restaurants';

class Randomize extends React.Component {
  handleClick(event) {
    event.preventDefault();
    let restaurantNames = this.props.restaurants.map(restaurant => restaurant.name)
    let random = this.props.dispatch(this.props.randomizeRestaurant(this.randomize(restaurantNames)));
    let winningRestaurant = random.winningRestaurant;
    this.props.dispatch(setRestaurantNameState(winningRestaurant));
    winningRestaurant = this.props.restaurants.filter(restaurant => restaurant.name === winningRestaurant);
    this.props.dispatch(setRestaurantIdState(winningRestaurant[0].id));
  }
  
  randomize(restaurants) {
    let currentIndex = restaurants.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = restaurants[currentIndex];
      restaurants[currentIndex] = restaurants[randomIndex];
      restaurants[randomIndex] = temporaryValue;
    }
    return restaurants[0];
  }

  render() {
    if (this.props.currentCollectionId === 0) {
      return null;
    }
    return (
      <div>
        <h2>Randomize Restaurant</h2>
          <button
            type='submit'
            name='submit'
            id='randomizeRestaurantButton'
            onClick={e => this.handleClick(e)}>
            Randomize!
          </button>
          <p>{this.props.winningRestaurant}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurant.restaurants,
  winningRestaurant: state.restaurant.winningRestaurant,
  currentCollectionId: state.collection.currentCollectionId,
});

export default connect(mapStateToProps)(Randomize);