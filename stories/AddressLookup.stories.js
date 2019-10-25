import React from "react";

import Postcoder from "../src/index";

export default {
	title: "Lookup",
};

const defaultProps = {
	apiKey: "PCW45-12345-12345-1234X",
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
