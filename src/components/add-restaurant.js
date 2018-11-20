import React from 'react';
import { connect } from 'react-redux';
import { postRestaurant } from '../actions/restaurants';

class AddRestaurant extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    const value = this.input.value;
    this.props.dispatch(postRestaurant(value));
    this.input.value = '';
  }

  render() {
    return (
      <div>
        <h2>Add Restaurant</h2>
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            type='text'
            name='addRestaurant'
            id='addRestaurant'
            className='addRestaurant'
            placeholder='Add restaurant...'
            autoComplete='off'
            ref={input => (this.input = input)} />
          <button
            type='submit'
            name='submit'
            id='addRestaurantButton'>
            Add
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurant.restaurants
});

export default connect(mapStateToProps)(AddRestaurant);