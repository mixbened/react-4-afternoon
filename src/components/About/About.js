import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

export default function About (props) {
    return (
      <div>
        <div className='subnav'>
        <Link className='subnav_links' to='/about'><h3>About</h3></Link>
        <Link className='subnav_links' to='/about/history'><h3>History</h3></Link>
        <Link className='subnav_links' to='/about/contact'><h3>Contact</h3></Link>
        </div>
        <div className='box'>
        <h2>This is the About Page Titel - Content will be displayed underneath</h2> 
        {props.children}
        </div>
      </div>
    )
  }