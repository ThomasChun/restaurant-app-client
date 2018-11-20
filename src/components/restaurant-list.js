import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants, deleteRestaurants, setRestaurantIdState } from '../actions/restaurants';

class RestaurantList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchRestaurants())
  }

  handleDelete(event) {
    event.preventDefault();
    const value = event.currentTarget.id;
    if (value !== this.props.currentRestaurantId) {
      this.props.dispatch(deleteRestaurants(value))
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
      return (
        <li key={index} id={restaurant.id}>
          <div>
            <button className='delete-button' id={restaurant.id} onClick={e => this.handleDelete(e)}>X</button>
            <label className='restaurant-label' id={restaurant.id} onClick={e => this.handleLabel(e)}>{restaurant.name}</label>
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
  restaurants: state.restaurants,
  currentRestaurantId: state.currentRestaurantId
});

export default connect(mapStateToProps)(RestaurantList);