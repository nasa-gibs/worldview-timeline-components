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
import ShareLinks from './wv.share.links';

const link = new ShareLinks();

export default class Reddit extends React.Component {

  render() {
    return (
      <a id="rd-share" className="icon-link fa fa-reddit fa-2x" href={this.props.rdUrl} target="_blank" title="Share via Reddit!" />
    );
  }

}
