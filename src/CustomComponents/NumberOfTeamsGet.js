import React from 'react';
import { connect } from 'react-redux';
import { tribeChange } from '../redux';
import { Tribe_Change } from '../redux/apiCall/apiType';

class NumberOfTeamsGet extends React.Component {
    constructor(props) {
        super(props);
        
    }

    

    render() {
        return (
            <div>
                <h2>Inside Class : Number of teams are: {this.props.numOfTeams}</h2>
            </div>
        );
    }



}

const mapStateToProps = state => {
    return {
        numOfTeams: state.numOfTeams,
        teams: state.teams
    }

}



export default connect(mapStateToProps)(NumberOfTeamsGet);
