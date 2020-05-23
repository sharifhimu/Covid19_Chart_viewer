import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import 'chartjs-plugin-lineheight-annotation';
import styles from './Charts.module.css';





const Charts2 = ({data: {confirmed,recovered,deaths}, country}) =>  {

	const [dailyData, setDailyData] = useState([]);



	useEffect(() => {
		const fetchapi = async () => {
			setDailyData(await fetchDailyData());
		}
		
		

		fetchapi();

		

	}, [] );	




	const barchart = (
		confirmed
		 ?(
		 	<Bar 
		 	data = {{
		 		labels: ['Infected', 'Recovered', 'Deaths'],
		 		datasets: [{
		 			label: '',
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

		)

	

	return(

		<div className = {styles.container}>
	{/*		{country ? barchart : linechart}  */}
		
		{barchart}
		</div>

		)
}

export default Charts2;