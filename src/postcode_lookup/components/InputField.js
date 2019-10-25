import React, { Component } from "react";
import PropTypes from "prop-types";

export default class InputField extends Component {
	placeholder() {
		if (this.props.placeholder === false) {
			return "";
		} else if (this.props.placeholder != null) {
			return this.props.placeholder;
		} else {
			return "e.g. NR14 7PZ";
		}
	}
	render() {
		return (
			<input
				placeholder={this.placeholder()}
				onChange={this.props.updateInput}
			/>
		);
	}
}

InputField.propTypes = {
	placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
