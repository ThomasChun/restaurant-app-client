import React from 'react';
import { connect } from 'react-redux';
import { postYelpSearch, deleteYelpSearch } from '../actions/restaurants';

class YelpRestaurantSearch extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    let name = this.input.value;
    let location = document.getElementById('location').value
    console.log(name);
    console.log(location);
    this.props.dispatch(deleteYelpSearch());
    this.props.dispatch(postYelpSearch(name, location));
    this.input.value = '';
    // document.getElementById('location').value = '';
  }

  render() {
    return (
      <div className='yelp-search'>
        <h2>Search for a restaurant!</h2>
        <form onSubmit={e => this.onSubmit(e)}>
          <span>Search: <input 
            name='search'
            type='text'
            placeholder='In-N-Out'
            autoComplete='off'
            ref={input => (this.input = input)} />
          </span>
          <span>Location: <input 
            name='location'
            id='location'
            type='text'
            placeholder='Los Angeles, CA'
            autoComplete='off'/>
          </span>
          <button
            type='submit'
            name='submit'>
            Search
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurant.restaurants,
})
export default connect(mapStateToProps)(YelpRestaurantSearch);