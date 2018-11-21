import React from 'react';
import { connect } from 'react-redux';

class RestaurantInfo extends React.Component {

  render() {
    if (this.props.currentCollectionId === 0) {
      return null;
    }
    const restaurantId = this.props.currentRestaurantId;
    const restaurants = this.props.restaurants;
    if (restaurantId !== '' && this.props.currentCollectionId !== 0) {
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
  restaurants: state.restaurant.restaurants,
  currentRestaurantId: state.restaurant.currentRestaurantId,
  currentCollectionId: state.collection.currentCollectionId,
});

export default connect(mapStateToProps)(RestaurantInfo);
