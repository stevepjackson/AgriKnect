import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import FarmDetails from '../FarmDetails/FarmDetails'
import './farm.css'
import FarmJobsAvailable from '../FarmJobAvailable/FarmJobAvailable';
export class farmBio extends Component {
    componentDidMount() {
        console.log('this is params.id', this.props.match.params.id);
        this.props.dispatch({ type: "FETCH_FARM", payload: this.props.match.params.id });
    }

    render() {
        // console.log('in profile farm', this.props.reduxState.farmBioReducer)
        return (
            <>
                <div className={'farmBio'}>
                    {/* {JSON.stringify(this.props.reduxState.farmBioReducer)} */}
                    {this.props.reduxState.farmBioReducer.map((bio) => {
                        return (
                            <>
                                <div key={bio.id}>
                                    <h2>{bio.farm_name}</h2>
                                    <span>{bio.city}</span>, <span>{bio.state}</span>
                                    <p>Email: {bio.username}</p>
                                    <span>Owner: {bio.first_name}, </span>
                                    <span>{bio.last_name}</span>
                                    <p>Phone: {bio.phone}</p>
                                </div>
                                <div className={'farmBioSize'}>
                                    <h2>About</h2>
                                    <p>{bio.bio}</p>
                                </div>
                            </>
                        )
                    })}

                </div>
                <div className={'farmDetails'}>
                    {/* {JSON.stringify(this.props.reduxState.farmBioReducer)} */}
                    <h3 className={'farmDetailsHeader'}>Farm Details</h3>
                    {this.props.reduxState.farmBioReducer.map((details) => {
                        return (

                            <FarmDetails details={details} key={details.id} history={this.props.history} />
                        )
                    })}

                </div>
                <div className={'farmJobsAvailable'}>
                    {/* {JSON.stringify(this.props.reduxState.farmBioReducer)} */}
                    <h3 className={'farmJobs'}>Available Jobs</h3>
                    <ul>
                        {this.props.reduxState.farmJobsAvailable.map((job) => {
                            return (

                                <FarmJobsAvailable job={job} key={job.id} history={this.props.history} />
                            )
                        })}
                    </ul>
                </div>
            </>
        )
    }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(farmBio);