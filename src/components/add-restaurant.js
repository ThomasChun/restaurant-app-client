import React from 'react';
import { connect } from 'react-redux';
// import { postRestaurant } from '../actions/restaurants';

class AddRestaurant extends React.Component {

  render() {
    if (this.props.currentCollectionId === 0) {
      return (
        <div>
          <h2 className='restaurant-h2'>Select a collection!</h2>
          <p>Select a collection you want to update on the left before you can add restaurants with the Yelp search to the right!</p>
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