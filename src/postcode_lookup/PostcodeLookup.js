import React, { Component } from "react";
import InputField from "./components/InputField";
import SearchButton from "./components/SearchButton";
import ResultsSelect from "./components/ResultsSelect";
import PropTypes from "prop-types";

export default class PostcodeLookup extends Component {
	state = {
		input: "",
		loading: false,
		data: [],
	};

	updateInput = e => {
		this.setState({ input: e.target.value });
	};

	search = e => {
		let { apiKey, identifier } = this.props;
		this.setState({ loading: true });
		fetch(
			`https://ws.postcoder.com/pcw/${apiKey}/address/UK/${this.state.input}?format=json&lines=2&identifier=${identifier}`
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
				{this.state.data.length > 0 ? (
					<ResultsSelect
						data={this.state.data}
						addressSelectedCallback={this.props.addressSelectedCallback}
					/>
				) : (
					""
				)}
			</div>
		);
	}
}

PostcodeLookup.defaultProps = {
	apiKey: "PCW45-12345-12345-1234X",
	identifer: "react-address-lookup",
};
PostcodeLookup.propTypes = {
	apiKey: PropTypes.string,
	placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
