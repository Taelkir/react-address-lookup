import React, { Component } from "react";

export default class SearchButton extends Component {
	render() {
		return (
			<button type="button" onClick={this.props.search}>
				Search
			</button>
		);
	}
}
