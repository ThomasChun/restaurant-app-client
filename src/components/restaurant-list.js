import React from 'react';
import {connect} from 'react-redux';
import {fetchRestaurants} from '../actions/restaurants';

class RestaurantList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchRestaurants())
  }

  render() {
    const restaurants = this.props.restaurants.map((restaurant, index) => <li key={index}>{restaurant.name}</li>)
    return (
      <ul>
        {restaurants}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurants
});

export default connect(mapStateToProps)(RestaurantList);