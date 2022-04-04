# React-Address-Lookup

An React component for looking up addresses.

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

## Styling

The component provides the following classes that can be targeted for styling:

- `address-lookup-wrapper` : Targets the `<div>` that wraps the rest of the component.
- `address-lookup-select` : Targets the `<select>` element that displays address results.
- `address-lookup-option` : Targets the `<option>` elements within the select element.
- `address-lookup-search-button` : Targets the `<button>` used to fire off the search.
- `address-lookup-label` : Targets the `<label>` element linked to the input.
- `address-lookup-input` : Targets the `<input>` used to enter a search term.

## Fully International

To view a full list of all the countries (and their two character ISO codes) supported by the `country` prop, check here: https://postcoder.com/docs/address-lookup#global-coverage

## Development

1. Run `npm ci` to install node_modules from package-lock.json
2. Run `npm start` to begin storybook for development
