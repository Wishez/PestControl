import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import Servcie from './../components/Service';
import MainContentContainer from './../components/MainContentContainer'; 
import { chooseOption } from './../actions/appActions.js';

class SingleServiceContainer extends Component {

  static PropTypes = {
    match: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    services: PropTypes.object.isRequired,
    optionId: PropTypes.number.idRequired
  }
  
	componentDidMount() {
		
	}


  render() {
    const { serviceId } = this.props.match.params;
    const { services, dispatch, optionId } = this.props;
    const spaces = services[serviceId].options[optionId].spaces;
    
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
          optionId={optionId} />
        
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