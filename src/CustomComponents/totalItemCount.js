import React from 'react';
import { connect } from 'react-redux';

function TotalItemContainer(props) {
  return (
  <div>
      <h2>Number of Cakes Left In store: {props.numOfCakes}</h2>
  </div>    
  );
}

const mapStateToProps = state => {
    return {
        numOfCakes : state.cake.numOfCakes
    }
}



export default connect(mapStateToProps)(TotalItemContainer);
