import React from 'react';
import { connect } from 'react-redux';
import { fetchCollections, deleteCollection, setCollectionIdState, setCollectionNameState } from '../actions/collection';
import { fetchRestaurants } from '../actions/restaurants';

class CollectionList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCollections())
  }

  handleDelete(event) {
    event.preventDefault();
    const value = event.currentTarget.id;
    if (value !== this.props.currentCollectionId) {
      this.props.dispatch(deleteCollection(value))
    } else {
      alert('You cannot delete a collection currently being viewed. To delete the current collection, click to view another collection before deleting.')
    }
  }

  executeCalls(event) {
    this.handleLabel(event);
    this.handleName(event);
  }

  handleLabel(event) {
    event.preventDefault();
    const value = event.target.id;
    this.props.dispatch(setCollectionIdState(value));
    this.props.dispatch(fetchRestaurants(value))
  }

  handleName(event) {
    event.preventDefault();
    const value = event.currentTarget.className;
    this.props.dispatch(setCollectionNameState(value))
  }

  render() {
    const collections = this.props.collections.map((collection, index) => {
      return (
        <li key={index} id={collection.id}>
          <div>
            <button className='delete-button' id={collection.id} onClick={e => this.handleDelete(e)}>X</button>
            <label className={collection.name} id={collection.id} onClick={e => this.executeCalls(e)}>{collection.name}</label>          </div>
        </li>
      )
    })
    return (
      <ul>
        {collections}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  collections: state.collection.collections,
  currentCollectionId: state.collection.currentCollectionId,
  restaurants: state.restaurant.restaurants
});

export default connect(mapStateToProps)(CollectionList);