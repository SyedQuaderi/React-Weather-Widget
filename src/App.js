import React from 'react';
import Title from "./component/Title";
import Form from "./component/Form";
import Weather from "./component/Weather";

const API_KEY = "768b6e421763e28df7801b8928355cfb";

class App extends React.Component {

    state = {
        loading: true,
        temperature: '',
        city: '',
        humidity: '',
        description: '',
        wind:'',
        icon: '',
        error: ''
    }

   /* navigator.geolocation.getCurrentPosition((position) => {
        api += `lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
        this.fetchWeather(api);
    });*/

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
           
     const data = await api_call.json();
     const handleOptionChange = handleOptionChange;
     console.log(data);
    if(city) {
           this.setState({
             loading: false,
             temperature: data.main.temp,
             city: data.name,
             humidity: data.main.humidity,
             description: data.weather[0].description,
             icon: data.weather[0].icon,
             wind: data.wind.speed,
             error: ''
         }); 

        } else {
            this.setState({
             loading: false,
             temperature: '',
             city: '',
             humidity: '',
             description: '',
             icon: '',
             wind: '',
             windoff: '',
             error: 'Please enter the City'
         }); 
            
        }
        
    }
    
    getWind = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();

        this.setState({
         wind: data.wind.speed
         }); 
   
    }
    
    getWindOff = async (e) => {
        e.preventDefault();
        /*const city = e.target.elements.city.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
*/
        this.setState({
         wind: ''
         }); 
   
    }
    getInitialState = (e) => {
        return {
          selectedOption: 'option1'
        };
    }
        
    handleOptionChange = async (e) => {
        e.preventDefault();
        this.setState({
            wind: ''
        });
    }
    
    render() {
        return  (
            <div>
            <Title />
            <Form getWeather={this.getWeather}
            getWind={this.getWind}
            getWindOff={this.getWindOff}
            />
            <Weather temperature={this.state.temperature}
            city={this.state.city}
            humidity={this.state.humidity}
            description={this.state.description}
            icon={this.state.icon}
            wind={this.state.wind}
            windoff={this.state.windoff}
            error={this.state.error}
            />
            </div>
        );
    }
}

export default App;