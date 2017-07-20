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

export default class ShareLinks extends React.Component {
  onClick(type) {
    this.props.onClick(type);
  }

  render() {
    return (
      <div id="social-share">
        <a id="fb-share" className="icon-link fa fa-facebook fa-2x" href={this.props.fbLink} onClick={() => this.onClick('facebook')}  title="Share via Facebook!" />
        <a id="tw-share" className="icon-link fa fa-twitter fa-2x" href={this.props.twLink} onClick={() => this.onClick('twitter')}  title="Share via Twitter!" />
        <a id="rd-share" className="icon-link fa fa-reddit fa-2x" href={this.props.rdLink} onClick={() => this.onClick('reddit')}  title="Share via Reddit!" />
        <a id="email-share" className="icon-link fa fa-envelope fa-2x" href={this.props.emailLink} onClick={() => this.onClick('email')} title="Share via Email!" />
      </div>
    );
  }

}
