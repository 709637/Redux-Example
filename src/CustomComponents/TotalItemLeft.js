import React from 'react';
import { connect } from 'react-redux';
import { tribeChange } from '../redux';
import { Tribe_Change } from '../redux/apiCall/apiType';

class TotalItemLeft extends React.Component {
    constructor(props) {
        super(props);
        console.log("props in TotalItemLeft class", props, this.state);
        this.state={
            numOfTeams : this.props.numOfTeams,
            teams : this.props.teams
        }
        this.tribeChanged = this.tribeChanged.bind(this);
    }

    // componentWillReceiveProps (prevpros, nextprops){
    //    console.log("componentWillReceiveProps",prevpros,nextprops);
    // }
    tribeChanged() {
        fetch("http://dummy.restapiexample.com/api/v1/employees")
            .then(res => res.json()).then(res => {
                console.log("response..........", res,this.props,this.state);
                this.setState({
                    teams : res.data,
                    numOfTeams : res.data.length
                })
                this.props.tribeChange(res.data);
            })
            .catch(e => {
                console.log("error block..........");
                console.log(e);
            })
    }

    static getDerivedStateFromProps(props, state) {
        console.log("componentWillReceiveProps", props, state);
        return null;
    }
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log("componentWillReceiveProps",prevProps,prevState);
    //   }

    render() {
        return (
            <div>
                {/* <h2>Inside Class : Number of Cakes Left In store: {this.props.numOfCakes}</h2> */}
                <h2>Inside Class : Number of teams are: {this.state.numOfTeams}</h2>
                <button onClick={this.tribeChanged}>API Call</button>
            </div>
        );
    }



}

const mapStateToProps = state => {
    console.log("Class : state-------", state);
    return {
        numOfTeams: state.numOfTeams,
        teams: state.teams
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        tribeChange: (data) => dispatch(tribeChange(data))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(TotalItemLeft);
