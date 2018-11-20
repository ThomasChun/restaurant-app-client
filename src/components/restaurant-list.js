import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants, deleteRestaurants } from '../actions/restaurants';

class RestaurantList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchRestaurants())
  }

  handleDelete(event) {
    event.preventDefault();
    const value = event.currentTarget.id;
    this.props.dispatch(deleteRestaurants(value))
  }

  render() {
    const restaurants = this.props.restaurants.map((restaurant, index) => {
      return (
        <li key={index} id={restaurant.id}>
          <div>
            <button className='delete-button' id={restaurant.id} onClick={e => this.handleDelete(e)}>X</button>
            <label>{restaurant.name}</label>
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
  restaurants: state.restaurants
});

export default connect(mapStateToProps)(RestaurantList);