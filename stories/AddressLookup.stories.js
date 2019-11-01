import React, { useState } from "react";

import Postcoder from "../src/index";

export default {
	title: "Lookup",
};

const defaultProps = {
	apiKey: "PCW45-12345-12345-1234X",
	addressSelectedCallback: function(addrObj) {
		console.log(addrObj);
	},
};

export const SearchByPostcode = () => <Postcoder {...defaultProps} />;
SearchByPostcode.story = {
	name: "0 - Default search by postcode",
};

export const SearchByPostcodeNoPlaceHolder = () => (
	<>
		<Postcoder {...defaultProps} placeholder={false} />
	</>
);
SearchByPostcodeNoPlaceHolder.story = {
	name: "1 - Search by postcode; no placeholder",
};

export const InAForm = () => {
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
			<label>Postcode search</label>
			<Postcoder
				{...defaultProps}
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

InAForm.story = {
	name: "3 - In situ within a form",
};
