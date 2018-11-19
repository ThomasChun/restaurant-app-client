import React from 'react';
import { connect } from 'react-redux';

class Randomize extends React.Component {
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
        <h2>Randomize Restaurant</h2>
        <form onSubmit={e => this.onSubmit(e)}>
          <button
            type='submit'
            name='submit'
            id='randomizeRestaurantButton'>
            Randomize!
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurants
});

export default connect(mapStateToProps)(Randomize);