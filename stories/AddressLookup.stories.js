import React from "react";

import PostcodeLookup from "../src/index";

export default {
	title: "Lookup",
};

export const SearchByPostcodeNoPlaceHolder = () => (
	<PostcodeLookup noplaceholder />
);

SearchByPostcodeNoPlaceHolder.story = {
	name: "Search by postcode; no placeholder",
};

export const SearchByPostcode = () => <PostcodeLookup />;
SearchByPostcode.story = {
	name: "Search by postcode",
};
