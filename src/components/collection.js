import React from 'react';
import { connect } from 'react-redux';
import { postCollection } from '../actions/collection';

class RestaurantCollections extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    const value = this.input.value;
    this.props.dispatch(postCollection(value));
    this.input.value = '';
  }

  render() {
    return (
      <div>
        <h2>Restaurant Collections</h2>
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            type='text'
            name='addCollection'
            id='addCollection'
            className='addCollection'
            placeholder='Add collection...'
            autoComplete='off'
            ref={input => (this.input = input)} />
          <button
            type='submit'
            name='submit'
            id='addCollectionButton'>
            Add
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  collections: state.collection.collections
});

export default connect(mapStateToProps)(RestaurantCollections);