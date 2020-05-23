import React from 'react';

import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards2 = ( {data: {confirmed, recovered, deaths, lastUpdate} } ) =>  {

	if(!confirmed){
		return 'Wait a second...';
	}

	return(


		<div className = {styles.container}>
		<Grid container spacing={3} justify="center">
			<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
				<CardContent>
						<Typography variant="h5" gutterBottom>
							Infected
						</Typography>

						<Typography variant="h6">
							
							<CountUp
							start= {0}
							end = {confirmed.value}
							duration= {2}
							separator= ","
							/>

						</Typography>

						<Typography >
							{new Date (lastUpdate).toDateString()}
						</Typography>

						<Typography variant="body2">
							Number of active cases
						</Typography>	

				</CardContent>

			</Grid>

			<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
				<CardContent>
						<Typography variant="h5" gutterBottom>
							Recovered
						</Typography>

						<Typography variant="h6">
							
							<CountUp
							start= {0}
							end = {recovered.value}
							duration= {2}
							separator= ","
							/>

						</Typography>

						<Typography >
							{new Date (lastUpdate).toDateString()}
						</Typography>

						<Typography variant="body2">
							Number of Recovered cases
						</Typography>	

				</CardContent>

			</Grid>

			<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
				<CardContent>
						<Typography variant="h5" gutterBottom>
							Deaths
						</Typography>

						<Typography variant="h6">
							
							<CountUp
							start= {0}
							end = {deaths.value}
							duration= {2}
							separator= ","
							/>

						</Typography>

						<Typography >
							{new Date (lastUpdate).toDateString()}
						</Typography>

						<Typography variant="body2">
							Number of Death cases
						</Typography>	

				</CardContent>

			</Grid>

		</Grid>

		</div>

		)
}

export default Cards2;