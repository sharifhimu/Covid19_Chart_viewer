import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';

import styles from './CountryPicker.module.css';

import {fetchCountries} from '../../api';

const CountryPicker = ({handleCountrychange}) =>  {

const [fetchedcountry,setFetchedCountry] = useState([]);	



useEffect(() =>{
	const fetchApicountries = async () => {
		setFetchedCountry(await fetchCountries());
	}

	fetchApicountries();
}, [setFetchedCountry] );

// console.log(fetchedcountry);
// console.log(fetchedcountry[13]);





	return(


		<FormControl  className={styles.formControl}>
		
		{/*	<NativeSelect   defaultValue="" onChange = {(event) => handleCountrychange(event.target.value)}>
				<option value=""> Choose a Country </option>
				{fetchedcountry.map((country, i) => <option key={i} value={country}> {country} </option>)}
			</NativeSelect>		*/}

			
			<InputLabel id="demo-simple-select-label" value={fetchedcountry} className={styles.countrytext} >Choose a Country to see current status</InputLabel> 
        	<Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value= {fetchedcountry[13]}
          onChange={(event) => handleCountrychange(event.target.value)}
        	>
       {/* 	<MenuItem value={fetchedcountry}  >Bangladesh</MenuItem>  */}
        {fetchedcountry.map((country, i) => <MenuItem key={i} value={country}>{country}</MenuItem>)}     

    

        	</Select>


		</FormControl>

		)
}

export default CountryPicker;