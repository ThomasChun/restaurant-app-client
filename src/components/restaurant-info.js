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
      console.log(restaurant)
      let categories = restaurant.categories.map(category => `${category.title}`)
      categories = categories.join(', ');
      let transactions = restaurant.transactions.join(', ');
      if (transactions === '') {
        transactions = 'N/A';
      }
      return (
        <div className='restaurant-details'>
          <h2>Restaurant Details</h2>
          <img src={restaurant.image} alt={restaurant.name} className='yelp-img'></img>
          <h3><a href={restaurant.url} target='blank'>{restaurant.name}</a></h3>
          <ul>
            <li><b>Address:</b>  {restaurant.address}</li>
            <li><b>Phone:</b>  {restaurant.phone}</li>
            <li><b>Rating:</b>  {restaurant.rating}</li>
            <li><b>Price:</b>  {restaurant.price}</li>
            <li><b>Yelp! Review Count:</b>  {restaurant.reviewCount}</li>
            <li><b>Categories:</b>  {categories}</li>
            <li><b>Transactions:</b>  {transactions}</li>
          </ul>
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
