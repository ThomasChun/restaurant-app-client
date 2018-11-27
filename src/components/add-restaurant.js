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
      return (
        <div>
          <h2 className='restaurant-h2'>Select a collection!</h2>
          <p>Select a collection you want to update on the left before you can add restaurants with the Yelp! search to the right!</p>
        </div>
      )
    }
    if (this.props.restaurants.length === 0) {
      return (
        <div>
          <h2 className='restaurant-h2'>{this.props.currentCollectionName}</h2>
          <p>Add restaurants to a collection by using the 'Search for a restaurant' field. Your search will return results where you can choose to 'Add' restaurants to a collection.</p>
        </div>
      )
    }
    return (
      <div>
        <h2 className='restaurant-h2'>{this.props.currentCollectionName} ({this.props.restaurants.length})</h2>
        {/* <form onSubmit={e => this.onSubmit(e)}>
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
        </form> */}
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