import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/image.png'

class App extends React.Component {
    state = {
        data: {},
        country:'',
    }
    async componentDidMount() { 
        const fetcheddata = await fetchData();
        this.setState({ data: fetcheddata });
    }
    handleCountryChanges = async (country) => {
        const fetcheddata = await fetchData(country);
        this.setState({ data: fetcheddata ,country:country});
    }
    render() {
        const { data,country } = this.state
        return (
            <div className={styles.container}>
                <img className={styles.image}  src={coronaImage} alt="covid19" />
                <Cards data={data} />
                <CountryPicker handleCountryChanges={this.handleCountryChanges}/>
                <Chart data={data} country={country} />
            </div>
        )
    }
}


export default App;