import React, { useState, useEffect } from 'react';
import { GetStatusByCountry } from '../../api/CoronAPi';
import { Line } from 'react-chartjs-2';

function Diagram({ country }) {
	const [countrydata, setCountryData] = useState([]);

	useEffect(() => {
		const FetchedData = async () => {
			const data = await GetStatusByCountry(country);

			setCountryData(data);
		};
		FetchedData();
	}, [country]);

	const LineChart = () => {
		return countrydata ? (
			<Line
				data={{
					labels: countrydata.map(({ lastUpdate }) =>
						new Date(lastUpdate).toLocaleDateString()
					),
					data: [1, 2, 1, 4, 5],
					datasets: [
						{
							label: ['Confirmed'],
							data: countrydata.map(({ confirmed }) => confirmed),

							label: 'Infected',
							borderColor: '#3333ff',
							fill: true,
						},
						{
							label: ['Deaths'],
							data: countrydata.map(({ deaths }) => deaths),
							borderColor: 'red',
							backgroundColor: 'rgba(255, 0, 0, 0.5)',
							fill: true,
							borderWidth: 1,
						},
						{
							label: ['Recovered'],
							data: countrydata.map(({ recovered }) => recovered),
							borderColor: 'green',
							backgroundColor: 'rgba(0, 255, 0, 0.5)',
							fill: true,
						},
					],
				}}
				width={100}
				height={50}
			/>
		) : null;
	};
	return country ? <LineChart /> : 'Pickcountry';
}

export default Diagram;
