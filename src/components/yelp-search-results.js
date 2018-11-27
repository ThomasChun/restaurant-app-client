import React from 'react';
import { connect } from 'react-redux';
import { fetchYelpSearchResults, postRestaurant } from '../actions/restaurants';

class YelpSearchResults extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchYelpSearchResults());
  }

  onClick(e) {
    const collectionId = this.props.currentCollectionId
    const searchResults = this.props.yelpSearchResults[0].searchResult;
    const selectedRestaurant = searchResults.filter(restaurant => restaurant.id === e.currentTarget.id)
    const restaurant = selectedRestaurant[0];
    const yelpId = restaurant.id;
    const { name, address, rating, price, image, url, categories, reviewCount, transactions, phone } = restaurant;
    this.props.dispatch(postRestaurant(name, yelpId, address, rating, price, image, url, categories, reviewCount, transactions, phone, collectionId));
  }

  render() {
    if (this.props.yelpSearchResults[0] === undefined || this.props.yelpSearchResults[0].searchResult.length === 0) {
      return (
        <div>
          <h3>Search Yelp! for restaurants to your collection above!</h3>
        </div>
      )
    } else {
      const searchResults = this.props.yelpSearchResults[0].searchResult.slice(0, 5);
      const searchResult = searchResults.map((restaurant, index) => {
        return (
          <li key={index} id={restaurant.id} className='yelp-search-result'>
            <img src={restaurant.image} alt={restaurant.name} className='yelp-search-result-img'></img>
            <button className='add-button' id={restaurant.id} onClick={e => this.onClick(e)}>+ Add Restaurant!</button>
            <ul>
              <li><b>Name:</b> <a href={restaurant.url} target='blank'>{restaurant.name}</a></li>
              <li><b>Address:</b>  {restaurant.address}</li>
              <li><b>Rating:</b>  {restaurant.rating}</li>
              <li><b>Price:</b>  {restaurant.price}</li>
              <li><b>Yelp! Review Count:</b>  {restaurant.reviewCount}</li>
            </ul>
          </li>
        )
      })
      return (
        <div>
          <h3>Yelp! Search Results:</h3>
          <ul>
            {searchResult}
          </ul>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  yelpSearchResults: state.restaurant.yelpSearchResults,
  currentCollectionId: state.collection.currentCollectionId,
})
export default connect(mapStateToProps)(YelpSearchResults);