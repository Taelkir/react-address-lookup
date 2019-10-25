import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ResultsSelect extends Component {
	render() {
		return (
			<select style={{ display: "block" }}>
				{this.props.data.map((address, index) => {
					return <option key={index}>{address.summaryline}</option>;
				})}
			</select>
		);
	}
}
ResultsSelect.propTypes = {
	data: PropTypes.array,
};
