import React from "react";
import "./style.css";

const PostcodeLookup = props => {
	return <input placeholder={props.noplaceholder ? "" : "e.g. NR14 7PZ"} />;
};

export default PostcodeLookup;
