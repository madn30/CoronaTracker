import React, { useState, useEffect } from 'react';
import { GetGlobalStatus } from '../../api/CoronAPi';
import { Card, CardContent, Grid, Paper, Typography } from '@material-ui/core';
import MakeStyles from './Styles';
import CardItem from './CardItem/CardItem';

function Status({ country }) {
	const [data, setData] = useState({});
	const classes = MakeStyles();

	useEffect(() => {
		const GetData = async () => {

			const resp = await GetGlobalStatus(country);

			setData(resp);
		};
		GetData();
	}, [country]);

	return (
		<div>
			{data ? (

				<Grid
					justify="center"
					direction="row"
					container
					alignItems="center"
					className={classes.Grid}
					spacing={5}>

					<CardItem
						className={classes.infected}
						data={data.confirmed}
						date={data.lastUpdate}
						Situation="Infected"
					/>
					<CardItem
						className={classes.recovered}
						data={data.recovered}
						date={data.lastUpdate}
						Situation="Recovered"
					/>
					<CardItem
						className={classes.deaths}
						data={data.deaths}
						date={data.lastUpdate}
						Situation="Deaths"
					/>
				</Grid>
			) : null}
		</div>
	);
}

export default Status;
