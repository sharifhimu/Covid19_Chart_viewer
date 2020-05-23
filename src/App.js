import React, {Component} from 'react';



import {Cards,Charts,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData, fetchData2} from './api';

import Charts2 from './components/Charts/Charts2';
import Cards2 from './components/Cards/Cards2';

// import logo from './image/logo.png';

class App extends Component{

  state = {
    data: {},
    data2: {},
    country: '',
  }



async  componentDidMount(){
    const fetchedData = await fetchData();

    this.setState({data: fetchedData});

    const fetchedData2 = await fetchData2();

    this.setState({data2: fetchedData2});


  }

  handleCountrychange = async (country) => {
    const fetchedData2 = await fetchData2(country);


    this.setState({data2:fetchedData2, country: country});
    // console.log(fetchedData2);
  }

  render(){

    const {data, data2, country} = this.state;

    return(

      <div className = {styles.container}>

        <img src="logo.png" alt= "Logo" className= {styles.logoname} />

         <CountryPicker handleCountrychange={this.handleCountrychange}/>

           {country ? <h1 className={styles.presentstatus} style={{color: '#434343'}}> Present status of {country} </h1> : null }

           {country ? <Cards2 data={data2}/> : null } 
          
         {country ? <Charts2 data={data2} country= {country} /> : null }

         <h1 style={{color: '#434343'}}> World chart </h1>

          <Cards data={data}/>
         
          <Charts data={data}  />
          
         

      </div>



      );
  
  
  }
}

export default App;
