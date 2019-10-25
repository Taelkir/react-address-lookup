import React, { Component } from "react";

export default class InputField extends Component {
	render() {
		return (
			<input
				placeholder={this.props.noplaceholder ? "" : "e.g. NR14 7PZ"}
				onChange={this.props.updateInput}
			/>
		);
	}
}
