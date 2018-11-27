import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants, deleteRestaurants, setRestaurantIdState } from '../actions/restaurants';
import yelpStars from '../images/stars';

class RestaurantList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchRestaurants());
  }

  handleDelete(event) {
    event.preventDefault();
    const value = event.currentTarget.id;
    const collectionId = this.props.currentCollectionId;
    if (value !== this.props.currentRestaurantId) {
      this.props.dispatch(deleteRestaurants(value, collectionId))
    } else {
      alert('You cannot delete a restaurant currently being viewed. To delete the current restaurant, click to view another restaurant before deleting.')
    }
  }

  handleLabel(event) {
    event.preventDefault();
    const value = event.target.id;
    this.props.dispatch(setRestaurantIdState(value))
  }

  render() {
    const restaurants = this.props.restaurants.map((restaurant, index) => {
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
        <li key={index} id={restaurant.id}>
          <div>
            <button className='delete-button' id={restaurant.id} onClick={e => this.handleDelete(e)}>X</button>
            <label className='restaurant-label' id={restaurant.id} onClick={e => this.handleLabel(e)}>{stars} {restaurant.name}</label>
          </div>
        </li>
      )
    })
    return (
      <ul>
        {restaurants}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurant.restaurants,
  currentRestaurantId: state.restaurant.currentRestaurantId,
  currentCollectionId: state.collection.currentCollectionId
});

export default connect(mapStateToProps)(RestaurantList);