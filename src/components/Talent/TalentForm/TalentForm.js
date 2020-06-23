import React, { Component } from 'react'; 
import Skills from '../Skills/Skills'; 
import ExpertiseLevel from '../ExpertiseLevel/ExpertiseLevel'; 
import Equipment from '../Equipment/Equipment'; 
import Brands from '../Brands/Brands';
import Certifications from '../Certifications/Certifications'; 
import Education from '../Education/Education'; 
import Employment from '../Employment/Employment'; 
import Location from '../Location/Location';
import Bio from '../Bio/Bio'; 

export class TalentForm extends Component {
    state = {
        formCounter: 0,
        generalAgricultureSkills: []
    }

    //changes this.state.formCounter so that the correct part of the form is rendered to the page
    changeFormCounter = (event, property) => {
        if(property === 'add') {
            this.setState({
                ...this.state,
                formCounter: this.state.formCounter + 1
            })
            console.log(this.state.formCounter)
        } else {
            this.setState({
                ...this.state,
                formCounter: this.state.formCounter - 1
            })
            console.log(this.state.formCounter)
        }
    }

    render() {
        let formToShow = <span> </span>
        if (this.state.formCounter === 0) {
            formToShow = <Skills/>
        } else if (this.state.formCounter === 1) {
            formToShow = <ExpertiseLevel/>
        } else if (this.state.formCounter === 2) {
           formToShow = <Equipment />
        } else if (this.state.formCounter === 3) {
            formToShow = <Brands />
        } else if (this.state.formCounter === 4) {
            formToShow = <Certifications />
        } else if (this.state.formCounter === 5) {
            formToShow = <Education />
        } else if (this.state.formCounter === 6) {
            formToShow = <Employment />
        } else if (this.state.formCounter === 7) {
            formToShow = <Location />
        } else if (this.state.formCounter === 8) {
            formToShow = <Bio />
        }
        return (
            <div>
               <h1> Talent Form </h1> 
        
            {formToShow}

            <button onClick={(event) => this.changeFormCounter(event, 'subtract')}> Back </button> 
            <button onClick={(event) => this.changeFormCounter(event, 'add')}> Next</button>
            </div>
        )
    }
}

export default TalentForm; 