import React from 'react';
import { connect } from 'react-redux';
import { fetchCollections, deleteCollection, setCollectionIdState } from '../actions/collection';

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

  handleLabel(event) {
    event.preventDefault();
    const value = event.target.id;
    this.props.dispatch(setCollectionIdState(value))
  }

  render() {
    const collections = this.props.collections.map((collection, index) => {
      return (
        <li key={index} id={collection.id}>
          <div>
            <button className='delete-button' id={collection.id} onClick={e => this.handleDelete(e)}>X</button>
            <label className='collection-label' id={collection.id} onClick={e => this.handleLabel(e)}>{collection.name}</label>
          </div>
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
  currentCollectionId: state.collection.currentCollectionId
});

export default connect(mapStateToProps)(CollectionList);