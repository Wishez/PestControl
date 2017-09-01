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

const Main = ({

}) => (
    <main id='main'
        className='main'>
    <Route render={({ location }) => (
        <RouteTransition 
            pathname={location.pathname}
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
        >
            <Switch style={{opacity: 0}}
             key={location.key} 
             location={location}>
                <MyRoute exact path='/' component={PresentContainer} />   
                <MyRoute path='/services' component={ServicesContainer} />
                <MyRoute path='/contacts' component={ContactsContainer} />
                <MyRoute path='/institutions' component={IsistutionsContainer} />   
                <MyRoute path='/advice' component={AdviceContainer} /> 
                <Route render={() => (

                    <Redirect to="/not_found" />
                )}  />
                <MyRoute path='/not_found'
                    component={NotFound} />
            </Switch>
      </RouteTransition>
    )} />
    </main>
);

export default Main;
