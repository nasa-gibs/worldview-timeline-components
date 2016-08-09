/*
 * NASA Worldview
 *
 * This code was originally developed at NASA/Goddard Space Flight Center for
 * the Earth Science Data and Information System (ESDIS) project.
 *
 * Copyright (C) 2013 - 2016 United States Government as represented by the
 * Administrator of the National Aeronautics and Space Administration.
 * All Rights Reserved.
 *
 * Licensed under the NASA Open Source Agreement, Version 1.3
 * http://opensource.gsfc.nasa.gov/nosa.php
 */

import React from 'react';
import Draggable from 'react-draggable';

export default class TimelineDraggerRange extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      visible: true,
      width: this.props.width,
      id:'range',
    };
  }
  handleDrag(e, d){
    this.props.onDrag(d.deltaX, this.state.id);
  }
  render() {
    var styles = {
      fillOpacity: this.props.opacity
    };
    return (
      <Draggable
        onDrag={this.handleDrag.bind(this)}
        axis="x"
        position={{x:this.props.position, y:0}}>
        <rect
          fill={this.props.color}
          width={this.props.width}
          style={styles}
          height={this.props.height}
          className='dragger-range' />
      </Draggable>
    );
  }

}