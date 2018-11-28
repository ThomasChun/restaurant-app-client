import React from 'react';
import { connect } from 'react-redux';
import yelpStars from '../images/stars';

class RestaurantInfo extends React.Component {

  render() {
    if (this.props.currentCollectionId === 0) {
      return (
        <div className='restaurant-details'>
          <h2>Restaurant Details</h2>
          <p>Click or create a collection below to get started!</p>
        </div>
      )
    }

    const restaurantId = this.props.currentRestaurantId;
    const restaurants = this.props.restaurants;
    if (restaurantId !== '' && this.props.currentCollectionId !== 0) {
      
      let restaurant = restaurants.filter(restaurant => restaurant.id === restaurantId);
      restaurant = restaurant[0];
      let categories = restaurant.categories.map(category => `${category.title}`)
      categories = categories.join(', ');
      let transactions = restaurant.transactions.join(', ');
      
      if (transactions === '') {
        transactions = 'N/A';
      }
      
      let stars;
        switch (restaurant.rating) {
          case 0:
            stars = <img src={yelpStars.small_0} alt='0 stars' />;
            break;
          case 1:
            stars = <img src={yelpStars.small_1} alt='1 stars' />;
            break;
          case 1.5:
            stars = <img src={yelpStars.small_1_half} alt='1.5 stars' />;
            break;
          case 2:
            stars = <img src={yelpStars.small_2} alt='2 stars' />;
            break;
          case 2.5:
            stars = <img src={yelpStars.small_2_half} alt='2.5 stars' />;
            break;
          case 3:
            stars = <img src={yelpStars.small_3} alt='3 stars' />;
            break;
          case 3.5:
            stars = <img src={yelpStars.small_3_half} alt='3.5 stars' />;
            break;
          case 4:
            stars = <img src={yelpStars.small_4} alt='4 stars' />;
            break;
          case 4.5:
            stars = <img src={yelpStars.small_4_half} alt='4.5 stars' />;
            break;
          case 5:
            stars = <img src={yelpStars.small_5} alt='5 stars' />;
            break;
          default:
            stars = 'no rating';
        }

      return (
        <div className='restaurant-details'>
          <h2><a href={restaurant.url} target='blank'>{restaurant.name}</a></h2>
          <div className='restaurant-info'>
            
            <img src={restaurant.image} alt={restaurant.name} className='yelp-img'></img>
            {/* <h3><a href={restaurant.url} target='blank'>{restaurant.name}</a></h3> */}
            
            <ul>
              <li><b>Address:</b>  {restaurant.address}</li>
              <li><b>Phone:</b>  {restaurant.phone}</li>
              <li><b>Rating:</b>  {stars}</li>
              <li><b>Price:</b>  {restaurant.price}</li>
              <li><b>Yelp Reviews:</b>  {restaurant.reviewCount}</li>
              <li><b>Categories:</b>  {categories}</li>
              <li><b>Transactions:</b>  {transactions}</li>
              <li><a href={restaurant.url} target='blank'><img src={yelpStars.Yelp_trademark_RGB} alt='yelp logo' className='yelp-trademark-rgb-details'></img></a></li>
            </ul>
          </div>
        </div>
      )
    }
    
    // addresses an empty /api/yelp endpoint.
    if (this.props.currentCollectionId !== 0) {
      return (
        <div className='restaurant-details'>
          <h2>Restaurant Details</h2>
          <p>Click on a restaurant name from the list below to get information <br></br>or add a restaurant using the built in Yelp search bar!</p>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurant.restaurants,
  currentRestaurantId: state.restaurant.currentRestaurantId,
  currentCollectionId: state.collection.currentCollectionId,
});

export default connect(mapStateToProps)(RestaurantInfo);
