import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    currentQuery: '',
  };
  handelInputChange = eve => {
    this.setState({ [eve.target.name]: eve.target.value.trim() });
  };

  handleSubmit = eve => {
    eve.preventDefault();
    this.props.setQuery(this.state.currentQuery);
    this.setState({ currentQuery: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="searchFormButton"></button>
          <input
            name="currentQuery"
            className="searchFormInput"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handelInputChange}
            value={this.state.currentQuery}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  setQuery: PropTypes.func.isRequired,
};
export default SearchBar;
