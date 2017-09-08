import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import Servcie from './../components/Service';
import MainContentContainer from './../components/MainContentContainer'; 
import { 
  chooseOption,
  openMakeOrderForm,
  tryGetServicesIfNeeded,
  chooseService
} from './../actions/appActions.js';

class SingleServiceContainer extends Component {

  static PropTypes = {
    match: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    services: PropTypes.object.isRequired,
    optionId: PropTypes.number.idRequired
  }
  
	componentDidMount() {
    const { dispatch } = this.props;
    const { serviceId } = this.props.match.params;

	  dispatch(tryGetServicesIfNeeded());
    console.log('a single service component did mount');
    dispatch(chooseService(serviceId));
	}

  componentDidUpdate() {
    const { dispatch } = this.props;
    const { serviceId } = this.props.match.params;
    console.log('a single service component did update');
    dispatch(chooseService(serviceId)); 
  }


  openOrderForm = () => {
    const { serviceId } = this.props.match.params;
    const { dispatch } = this.props;
    dispatch(openMakeOrderForm()); 
  }

  render() {
    const { serviceId } = this.props.match.params;
    const { services, dispatch, optionId } = this.props;

    const spaces = services[serviceId].options[optionId].spaces;
    // chooseOption ー　выбор конкретной опции услуги в меню вариантов выполнения услуг.
    return (
      <MainContentContainer>
        <Servcie 
          chooseOption={index => {
            return () => {
              dispatch(chooseOption(index));
            };
          }}
          service={services[serviceId]}
          spaces={spaces}
          optionId={optionId}
          openMakeOrderForm={this.openOrderForm}
        />
        
      </MainContentContainer>
    );
  }
}

const mapStateToProps = state => {
  const {
    app 
  } = state;

  const {
    services,
    optionId
  } = app;

  return {
    services,
    optionId
  };
};

export default withRouter(connect(mapStateToProps)(SingleServiceContainer));