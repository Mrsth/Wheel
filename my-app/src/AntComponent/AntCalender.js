import React from 'react';
import { Calendar, Alert } from 'antd';
import moment from 'moment';

export default class AntCalender extends React.Component {
    state = {
      value: moment('2021-01-01'),
      selectedValue: moment('2021-01-01'),
    };
  
    onSelect = value => {
      this.setState({
        value,
        selectedValue: value,
      });
    };
  
    onPanelChange = value => {
      this.setState({ value });
    };
  
    render() {
      const { value, selectedValue } = this.state;
      console.log("Calender Data = ", selectedValue.format('YYYY-MM-DD'))
      localStorage.setItem('Date', selectedValue.format('YYYY-MM-DD'))
      return (
        <>
          <center><h1>Please select the date and time</h1></center>  
          <Alert
            message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
          />
          <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} fullscreen={false} height="100%"/>
        </>
      );
    }
  }
  

