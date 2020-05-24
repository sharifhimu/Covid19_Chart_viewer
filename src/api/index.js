import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {


	try{
		const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);

		return {confirmed, recovered, deaths, lastUpdate};
		
	}
	catch(error){

	}

}



export const fetchData2 = async (country) => {

	let changeableUrl = url;

	if(country){
		changeableUrl = `${url}/countries/${country}`;
	}

	try{
		const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl);

		return {confirmed, recovered, deaths, lastUpdate};
		
	}
	catch(error){
		console.log(`Refresh`);
	}
}


export const fetchDailyData = async () => {
	try{
		const {data} = await axios.get(`${url}/daily`);

		const modifiedData = data.map((dailyData) => ({
			confirmed: dailyData.confirmed.total,
			deaths: dailyData.deaths.total,
			date: dailyData.reportDate,
		}));
		
		return modifiedData;	
	}
	catch(error){
		console.log(`Refresh`);
	}

} 

export const fetchCountries = async () => {
	try{
		const {data: { countries }} = await axios.get(`${url}/countries`);

		return countries.map((country) => country.name);
	}
	catch(error){
		console.log(`Refresh`);
	}
}


 export const fetchBDinfo = async () => {
	try{
		const {data: {timelineitems: { total_cases }}} = await axios.get(`https://api.thevirustracker.com/free-api?countryTimeline=BD`);

		const modifiedData = {total_cases}

		return modifiedData;
	}
	catch(error){

	}
}

