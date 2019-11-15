import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SearchButton extends Component {
	render() {
		return (
			<button
				className="address-lookup-search-button"
				type="button"
				onClick={this.props.search}
			>
				Search
			</button>
		);
	}
}

SearchButton.propTypes = {
	search: PropTypes.func.isRequired,
};
