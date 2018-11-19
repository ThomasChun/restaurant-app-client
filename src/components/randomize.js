import React from 'react';
import { connect } from 'react-redux';

class Randomize extends React.Component {
  handleClick(event) {
    event.preventDefault();
    console.log(this.props.restaurants)
    let restaurantNames = this.props.restaurants.map(restaurant => restaurant.name)
    console.log(restaurantNames)
    this.props.dispatch(this.props.randomizeClick(this.randomize(restaurantNames)));
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
          <p>You are eating at {this.props.winningRestaurant} tonight!</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurants,
  winningRestaurant: state.winningRestaurant
});

export default connect(mapStateToProps)(Randomize);