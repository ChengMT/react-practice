import React , {Component} from 'react';
import './temperature.css';
import Boiling from './boiling.js';
import Display from './display.js';
// import PropTypes from 'prop-types';
// import Formula from './formula.js';


function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
    
  }

class Temperature extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            temperature:'',
            scale:'c'
        }
        this.handleCelsius = this.handleCelsius.bind(this);
        this.handleFahrenheit =this.handleFahrenheit.bind(this);
    }

    handleCelsius(temperature){
        this.setState({
            scale:'c',
            temperature
        })
    }

    handleFahrenheit(temperature){
        this.setState({
            scale:'f',
            temperature
        })
    }

    render(){
        const temperature = this.state.temperature;
        const scale = this.state.scale;
        // const temperatureNewc = <Formula value={temperature} scale='c' />
        // const temperatureNewf = <Formula value={temperature} scale='f' />
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return(
            <div className="global-style">
                <div className="instructor">
                    显示水是否已经开了，分别有华氏温度和摄氏温度显示
                </div>
                <div>
                    <Display onhandleClick={this.handleCelsius} temperature={celsius} scale='c'/>
                    <Display onhandleClick={this.handleFahrenheit} temperature={fahrenheit} scale='f'/>
                </div>
                <div className="content-style">
                    <Boiling CValue={celsius}/>
                </div>
            </div>
        )
    }
}


export default Temperature;