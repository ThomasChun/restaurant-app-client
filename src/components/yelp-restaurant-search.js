import React from 'react';
import { connect } from 'react-redux';
import { postYelpSearch, deleteYelpSearch } from '../actions/restaurants';

class YelpRestaurantSearch extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    let name = this.input.value;
    console.log(name);
    this.props.dispatch(deleteYelpSearch());
    this.props.dispatch(postYelpSearch(name));
    this.input.value = '';
    //search should also provide location (los angeles, ca)
    //run the yelp search function with searchTerm
    //store the search results in state so it can be displayed on screen (rendered)
    //allow users to add a specific restaurant from the list 
    //update restaurants models schema with new key: values
    //add the restaurant to database
    //access through endpoint to display restaurants within a collection on the DOM
  }

  render() {
    return (
      <div className='yelp-search'>
        <h2>Search for a restaurant!</h2>
        <form onSubmit={e => this.onSubmit(e)}>
          <p>Search:
            <input 
            type='text'
            placeholder='In-N-Out'
            autoComplete='off'
            ref={input => (this.input = input)} />
          </p>
          {/* <p>Location:
          <input 
            type='text'
            placeholder='Los Angeles, CA'
            autoComplete='off'
            ref={input2 => (this.input = input2)} />
          </p> */}
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