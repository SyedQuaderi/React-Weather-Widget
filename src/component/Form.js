import React from 'react';

class Form extends React.Component {
    render() {
        return(
        <div className="reactWeatherWidget">
            <form onSubmit={this.props.getWeather}>
                <p className="reactTitle">Title</p>
                <input className="reactInput" type="text" name="city" placeholder="Title of widget"/>
                <p className="reactTitle">Temperature</p>
                <div className="radio">
                    <label className="label1">
                        <input type="radio" value="option1" name="temp"/>
                        C
                    </label>
                    <label className="label1">
                        <input type="radio" value="option2" name="temp"/>
                        F
                    </label>
                </div>
                <p className="reactTitle">Wind</p>
                <div className="radio">
                    <label className="label2">
                        <input type="radio" value="option1" name="wind"/>
                        On
                    </label>
                    <label className="label2">
                        <input type="radio" value="option2" name="wind"/>
                        Off
                    </label>
                </div>
                <button className="weatherButton"> Get Weather </button>
            </form>
        </div>
        );
    }
}

export default Form;