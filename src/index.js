import React from "react";
import PostcodeLookup from "./postcode_lookup/PostcodeLookup";
import "./style.css";
import PropTypes from "prop-types";

const Postcoder = props => {
	return <PostcodeLookup {...props} />;
};

Postcoder.propTypes = {
	placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	apiKey: PropTypes.string.isRequired,
	addressSelectedCallback: PropTypes.func.isRequired,
};

export default Postcoder;
