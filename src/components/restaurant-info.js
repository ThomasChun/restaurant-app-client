import React from 'react';
import { connect } from 'react-redux';

class RestaurantInfo extends React.Component {

  render() {
    const restaurantId = this.props.currentRestaurantId;
    const restaurants = this.props.restaurants;
    if (restaurantId !== '') {
      let restaurant = restaurants.filter(restaurant => restaurant.id === restaurantId);
      restaurant = restaurant[0];
      return (
        <div>
          <h2>Restaurant Details</h2>
          <li>Restaurant Name: {restaurant.name}</li>
          <li>Restaurant ID: {restaurant.id}</li>
          <li>Created at: {restaurant.createdAt}</li>
          <li>Updated at: {restaurant.updatedAt}</li>
        </div>
      )
    }
    return (
      <div>
        <h2>Restaurant Details</h2>
        <p>Click on a restaurant from the list above to get information!</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurants,
  currentRestaurantId: state.currentRestaurantId
});

export default connect(mapStateToProps)(RestaurantInfo);
