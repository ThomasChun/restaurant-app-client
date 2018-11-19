import React from 'react';
import { connect } from 'react-redux';

class AddRestaurant extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    if (this.props.onSubmitRestaurant) {
      const value = this.input.value;
      this.props.dispatch(this.props.onSubmitRestaurant(value));
      this.input.value = '';
    }
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