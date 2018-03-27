import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import ClassList from './components/ClassList/ClassList'
import Student from './components/Student/Student'
import History from './components/History/History'
import Contact from './components/Contact/Contact'

const routes = 
  <Switch>
    <Route component={ ClassList } path ="/classlist/:class" />
    <Route component={ Home } exact path="/" />
    <Route path="/about" render={() => {
    return <About>
        <Route path='/about/history' component={ History }/>
        <Route path='/about/contact' component={ Contact }/>
    </About>}} />
    <Route component={ Student } path='/student/:id'/>
  </Switch>;

  export {routes};