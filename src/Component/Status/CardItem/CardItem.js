import React from 'react';
import CountUp from 'react-countup';
import { Card, CardContent, Grid, Paper, Typography } from '@material-ui/core';
import MakeStyles from './Styles';
import cx from 'classnames';
function CardItem({ data, date, Situation, className }) {
	const classes = MakeStyles();

	if (!data) (
		<div>loading...</div>
	)

	return (
		<div>
			{data && (
				<Grid item component={Card} xs={12} className={cx(classes.Card, className)}>
					<CardContent>
						<Typography
							className={classes.title}
							variant="h5"
							color="primary"
							gutterBottom>
							{Situation}
						</Typography>
						<CountUp
							start={0}
							end={data ? data.value : 0}
							duration={1.75}
							decimal=","
							separator=",">
							<Typography
								className={classes.title}
								variant="body2"
								color="textSecondary"
								gutterBottom>
								{data}
							</Typography>
						</CountUp>
						<Typography
							className={classes.title}
							variant="body2"
							color="textSecondary"
							gutterBottom>
							{new Date(date).toDateString()}
						</Typography>
						<Typography
							className={classes.title}
							variant="body2"
							color="textSecondary"
							gutterBottom>
							Number Of Infected Cases WoldWide
						</Typography>
					</CardContent>
				</Grid>
			)}
		</div>
	);
}

export default CardItem;
