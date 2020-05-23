import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import 'chartjs-plugin-lineheight-annotation';
import styles from './Charts.module.css';





const Charts = ({data: {confirmed,recovered,deaths}}) =>  {

	const [dailyData, setDailyData] = useState([]);



	useEffect(() => {
		const fetchapi = async () => {
			setDailyData(await fetchDailyData());
		}
		
		

		fetchapi();

		

	}, [] );	


const linechart = (
	
	(dailyData.length)
				? (
				<Line

				

				options ={{
					responsive: true,
					lineHeightAnnotation: {
						always: false,
						hover: true,
						color: 'white',

					}
				}} 


				  data={{
		  
		  	labels: dailyData.map (({date}) => date),
		  	datasets: [{
		  		data: dailyData.map (({confirmed}) => confirmed),
		  		label: 'Infected',
		  		borderColor: '#ffffff',
		  		// backgroundColor: '#93291E',
		  		backgroundColor: 'rgba(194,24,7,.3)',
		  		fill: true,
		  		pointStyle: 'circle',
		  		pointRadius: 4,
		  		pointHoverBackgroundColor: 'black',
		  		borderDash: [2,2],
		  		
		  	}, {
		  		data: dailyData.map (({deaths}) => deaths),
		  		label: 'Death',
		  		borderColor: '#ffffff',
		  		backgroundColor: '#243B55',
		  		fill: true,
		  		pointStyle: 'circle',
		  		pointRadius: 4,
		  		pointHoverBackgroundColor: 'black',
		  		borderDash: [2,2],
		  		

		  	} ],
		  }}

		  

		  /> ) : null

			 
	
	);

{/*	const barchart = (
		confirmed
		 ?(
		 	<Bar 
		 	data = {{
		 		labels: ['Infected', 'Recovered', 'Deaths'],
		 		datasets: [{
		 			label: 'People',
		 			backgroundColor: ['rgba(194,24,7,1)','rgba(30,187,215,1)','rgba(34,40,35,1)'],
		 			
		 		data: [confirmed.value, recovered.value, deaths.value]	
		 		}]
		 	}}

		 	options={{
		 		legend: {display: false},

		 		title: {display: true,  text: `Current state in ${country}`}

		 	}}
		 	/>
		 	) : null

		)     */}

	

	return(

		<div className = {styles.container}>
	{/*		{country ? barchart : linechart}  */}
		{linechart}
		
		
		</div>

		)
}

export default Charts;