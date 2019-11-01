import React, { Component } from "react";
import PropTypes from "prop-types";
import uniqueId from "lodash.uniqueid";

export default class InputField extends Component {
	state = {
		inputId: uniqueId("react-address-lookup-id-"),
	};
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
			<>
				<label className="address-lookup-label" htmlFor={this.state.inputId}>
					{this.props.labelText}
				</label>
				<input
					className="address-lookup-input"
					placeholder={this.placeholder()}
					onChange={this.props.updateInput}
					id={this.state.inputId}
				/>
			</>
		);
	}
}

InputField.defaultProps = {
	labelText: "Search for your postcode",
};

InputField.propTypes = {
	placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
