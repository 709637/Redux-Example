import React, { useState } from 'react';
import {buyCake} from '../../redux';
import { connect } from 'react-redux';

function ItemContainer(props) {
  return (
  <div>
  </div>    
  );
}

const mapStateToProps = ( state, ownprops) => {
    const ItemState = ownprops.cake ? state.cake.numOfCakes : state.ice
    return {
        numOfCakes : state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return{
       buyCake : (number) => dispatch(buyCake(number))
    }
} 



export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer);
