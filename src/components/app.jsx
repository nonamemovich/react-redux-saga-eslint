import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadJoke } from '../store/actions/app';

class App extends Component {
  addNewJoke() {
    const { loadJoke } = this.props;
    loadJoke();
  }

  render() {
    const { app } = this.props;
    return (
      <section className="feed">
        <button type="button" onClick={() => this.addNewJoke()}> MORE!!! </button>
        {
            app.map(joke => (
              <article key={joke.id}>
                { joke.value }
              </article>
            ))
        }
      </section>
    );
  }
}

App.defaultProps = {
  app: [],
  loadJoke: () => {},
};

App.PropTypes = {
  app: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  loadJoke: PropTypes.func.isRequired,
};

const mapStateToProps = state => Object.assign({}, state);

const mapDispatchToProps = {
  loadJoke,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
