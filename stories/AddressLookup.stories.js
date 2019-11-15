import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import Postcoder from "../src/index";

const stories = storiesOf("Lookup", module).addDecorator(withKnobs);

const defaultProps = () => {
	const props = {
		apiKey: text("API_Key", "PCW45-12345-12345-1234X"),
		country: text("country_iso2", "UK"),
		addressSelectedCallback: function(addrObj) {
			alert(JSON.stringify(addrObj));
		},
		identifier: "Storybook_Lookup",
	};
	return props;
};

const SearchByPostcode = () => <Postcoder {...defaultProps()} />;

const SearchByPostcodeNoPlaceHolder = () => (
	<>
		<Postcoder {...defaultProps()} placeholder={false} />
	</>
);

const InAForm = () => {
	const [storedAddress, setAddress] = useState({
		addressline1: "",
		addressline2: "",
		postcode: "",
		posttown: "",
	});

	const addAddressToState = address => {
		setAddress(address);
	};

	return (
		<form>
			<legend>Enter your address</legend>
			<Postcoder
				{...defaultProps()}
				addressSelectedCallback={addAddressToState}
			/>
			<hr />
			<label htmlFor="address_line_1">Address line 1</label>
			<input
				readOnly
				type="text"
				id="address_line_1"
				value={storedAddress.addressline1}
			/>
			<br />
			<label htmlFor="address_line_2">Address line 2</label>
			<input
				readOnly
				type="text"
				id="address_line_2"
				value={storedAddress.addressline2}
			/>
			<br />
			<label htmlFor="posttown">Post town</label>
			<input
				readOnly
				type="text"
				id="posttown"
				value={storedAddress.posttown}
			/>
			<br />
			<label htmlFor="postcode">Postcode</label>
			<input
				readOnly
				type="text"
				id="postcode"
				value={storedAddress.postcode}
			/>
		</form>
	);
};

stories.add("In situ within a form", InAForm);
stories.add("Default search by postcode", SearchByPostcode);
stories.add("No placeholder", SearchByPostcodeNoPlaceHolder);
