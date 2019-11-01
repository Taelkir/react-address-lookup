# React-Address-Lookup

An in-development React component for looking up addresses.

Requires a Postcoder API Key. Sign up for a free one at https://postcoder.com

Out-of-the-box, react-address-lookup uses a demo API Key that only returns data for the UK postcode 'NR14 7PZ'.

Find out more at: https://postcoder.com/docs/address-lookup

## Install

`npm i react-address-lookup`

## Usage

The `<Postcoder />` component takes a function that is passed the object containing the selected address.

### Example

```
import React, { Component } from "react";
import Postcoder from "react-address-lookup";

export default class AddressLookup extends Component {
	logAddress = (addr) => {
		console.log(addr);
	}
	render() {
		return (
			<Postcoder
				apiKey="PCW45-12345-12345-1234X"
				addressSelectedCallback={logAddress}
			/>
		);
	}
}


```
