import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { TextField, Typography } from '@material-ui/core';

export class Location extends Component {

   
    addLocation = (event, property) => {
        if (property === 'city' ) {
            this.props.dispatch({ type: 'SET_CITY', payload: event.target.value })
        } else if (property === 'state') {
             this.props.dispatch({ type: 'SET_STATE', payload: event.target.value })
        } else {
             this.props.dispatch({ type: 'SET_ZIPCODE', payload: event.target.value })
        }
       
    }
    render() {
        const { classes } = this.props; //need this for Material UI

        return (
            <div>
               <Typography> Where are you looking for work?  </Typography> 

                <TextField value={this.props.talentForm.city}  id="standard-basic" label="City" onChange={(event) => this.addLocation(event, 'city')} />
                 <TextField value={this.props.talentForm.state}  id="standard-basic" label="State" onChange={(event) => this.addLocation(event, 'state')} />
                <TextField value={this.props.talentForm.zipcode}  id="standard-basic" label="Zip Code" onChange={(event) => this.addLocation(event, 'zipcode')} />
            </div>
        )
    }
}

Location.propTypes = { classes: PropTypes.object.isRequired };

const reduxStateToProps = (reduxState) => {
    return {
        talentForm: reduxState.talentForm.formData,

    }
}

export default connect(reduxStateToProps)(withStyles(styles)(Location)); 