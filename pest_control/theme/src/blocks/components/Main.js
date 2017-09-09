import React, { Component } from 'react'; 
import { Route, Switch, Redirect } from 'react-router-dom'
import { RouteTransition } from 'react-router-transition';

import NotFound from './../components/NotFound';
import MyRoute from './../components/MyRoute';
import PresentContainer from './../containers/PresentContainer';
import IsistutionsContainer from './../containers/IsistutionsContainer';
import AdviceContainer from './../containers/AdviceContainer';
import ContactsContainer from './../containers/ContactsContainer';
import ServicesContainer from './../containers/ServicesContainer';
import SingleAdviceContainer from './../containers/SingleAdviceContainer';
import SingleServiceContainer from './../containers/SingleServiceContainer';


const Main = ({

}) => (
    <Route render={({ location }) => (
        <RouteTransition 
            pathname={location.pathname}
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
        >
            <Switch 
             key={location.key} 
             location={location}>
                <Route exact path='/' render={props => (
                    <PresentContainer {...props} />  
                )} />
                <MyRoute path='/services/:serviceId' component={SingleServiceContainer} /> 
                <MyRoute path='/services' component={ServicesContainer} />
                <MyRoute path='/contacts' component={ContactsContainer} />
                <MyRoute path='/isistutions' component={IsistutionsContainer} />   
                <MyRoute path='/advice/:adviceId' component={SingleAdviceContainer} /> 
                <MyRoute path='/advice' component={AdviceContainer} /> 
                <Route render={() => (
                    <Redirect to="/not_found" />
                )}  />
                <MyRoute path='/not_found'
                    component={NotFound} />
            </Switch>
      </RouteTransition>
    )} />
);

export default Main;
