import React, { Component } from 'react';
import Time from '../Time/time.jsx';
import Day from '../Day/day.jsx';

export default class Calendar extends Component {
  render () {
    return (
      <div>
          <Time />
          <Day />
      </div>
    )
  }
}