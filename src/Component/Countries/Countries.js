import React, { useState, useEffect } from 'react';
import { GetCountries } from '../../api/CoronAPi';
import { NativeSelect, FormControl } from '@material-ui/core';
import Makestyle from './Styles';
function Countries({ setExactCountry }) {
	const [countries, setCountries] = useState([]);

	const classes = Makestyle();
	useEffect(() => {
		const FetchedData = async () => {
			setCountries(await GetCountries());
		};
		FetchedData();
	}, [setCountries]);

	return (
		<FormControl className={classes.formControl}>
			<NativeSelect
				onChange={e => setExactCountry(e.target.value)}
				defaultValue="">
				<option value="">Global</option>

				{countries.map((country, i) => (
					<option key={i} value={country}>
						{country}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	);
}

export default Countries;
