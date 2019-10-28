import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ResultsSelect extends Component {
	handleSelect = event => {
		if (this.props.addressSelectedCallback != null) {
			this.props.addressSelectedCallback(this.props.data[event.target.value]);
		}
	};

	render() {
		return (
			<select style={{ display: "block" }} onChange={this.handleSelect}>
				{this.props.data.map((address, index) => {
					return (
						<option key={index} value={index}>
							{address.summaryline}
						</option>
					);
				})}
			</select>
		);
	}
}
ResultsSelect.propTypes = {
	data: PropTypes.array,
	addressSelectedCallback: PropTypes.func,
};
