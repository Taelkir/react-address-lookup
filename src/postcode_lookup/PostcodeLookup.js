import React, { Component } from "react";
import InputField from "./components/InputField";
import SearchButton from "./components/SearchButton";
import ResultsSelect from "./components/ResultsSelect";
import PropTypes from "prop-types";

export default class PostcodeLookup extends Component {
	state = {
		input: "",
		loading: false,
		data: [{ summaryline: "Search for an address" }],
	};

	updateInput = e => {
		this.setState({ input: e.target.value });
	};

	search = e => {
		this.setState({ loading: true });
		fetch(
			`https://ws.postcoder.com/pcw/${this.props.apiKey}/address/UK/NR14%207PZ?format=json&lines=2&identifier=React%20Component`
		)
			.then(response => {
				return response.json();
			})
			.then(
				data => {
					this.setState({ data: data, loading: false });
				},
				error => {
					this.setState({
						loading: false,
						error,
					});
				}
			);
	};

	render() {
		return (
			<div>
				<InputField
					updateInput={this.updateInput}
					placeholder={this.props.placeholder}
				/>
				<SearchButton search={this.search} />
				{this.state.loading ? <p>Loading...</p> : ""}
				<ResultsSelect
					data={this.state.data}
					addressSelectedCallback={this.props.addressSelectedCallback}
				/>
			</div>
		);
	}
}
PostcodeLookup.propTypes = {
	apiKey: PropTypes.string.isRequired,
	placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
