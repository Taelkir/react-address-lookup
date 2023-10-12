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
			<select id="address-lookup-select"
				className="address-lookup-select"
				style={{ display: "block" }}
				onChange={this.handleSelect}
				defaultValue="null"
			>
				<option value="null" disabled>
					Select an address...
				</option>
				{this.props.data.map((address, index) => {
					return (
						<option className="address-lookup-option" key={index} value={index}>
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
