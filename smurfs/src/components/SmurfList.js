import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getSmurf } from '../actions'


const SmurfList = props => {
    return(
    <div>
       
        {/* <button type='submit' onClick={() => props.dispatch(getSmurf)}>Get Smurfen</button>
        {props.isFetching && (
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        )} */}
    
        {props.smurfs.map( blue => (
        <div>
            <h1>{blue.name}</h1>
            <h3>Age: {blue.age}</h3>
            <h3>Height: {blue.height}</h3>
        </div>
        ))}
    </div>

    )
}
    
const mapStateToProps = state => {
    return {
      smurfs: state.smurfs,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { getSmurf }
  )(SmurfList);


