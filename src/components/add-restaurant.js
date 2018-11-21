import React from 'react';
import { connect } from 'react-redux';
import { postRestaurant } from '../actions/restaurants';

class AddRestaurant extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    const collectionId = this.props.currentCollectionId
    const value = this.input.value;
    this.props.dispatch(postRestaurant(value, collectionId));
    this.input.value = '';
  }

  render() {
    if (this.props.currentCollectionId === 0) {
      return null;
    }
    return (
      <div>
        <h2>{this.props.currentCollectionName}</h2>
        <h3>Add Restaurant</h3>
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
  restaurants: state.restaurant.restaurants,
  currentCollectionName: state.collection.currentCollectionName,
  currentCollectionId: state.collection.currentCollectionId,
});

export default connect(mapStateToProps)(AddRestaurant);