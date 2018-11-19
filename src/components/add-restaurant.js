import React from 'react';
import { connect } from 'react-redux';
import { postRestaurant } from '../actions/restaurants';

class AddRestaurant extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    const value = this.input.value;
    console.log('value', value)
    this.props.dispatch(postRestaurant(value));
    this.input.value = '';
  }

  render() {
    return (
      <div>
        <h1>Restaurant App</h1>
        <h2>Add Restaurant</h2>
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            type='text'
            name='addRestaurant'
            id='addRestaurant'
            className='addRestaurant'
            placeholder='Restaurant...'
            autoComplete='off'
            ref={input => (this.input = input)} />
          <button
            type='submit'
            name='submit'
            id='addRestaurantButton'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurants
});

export default connect(mapStateToProps)(AddRestaurant);