import React from "react";

import Postcoder from "../src/index";

export default {
	title: "Lookup",
};

export const SearchByPostcode = () => <Postcoder />;
SearchByPostcode.story = {
	name: "0 - Default search by postcode",
};

export const SearchByPostcodeNoPlaceHolder = () => <Postcoder noplaceholder />;
SearchByPostcodeNoPlaceHolder.story = {
	name: "1 - Search by postcode; no placeholder",
};
