import React from 'react';
import { connect } from 'react-redux';
import { smurfSubmit } from '../actions';

class SmurfForm extends React.Component {
    state = {
      name: '',
      age: '',
      height: '',
  }


  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.smurfSubmit(this.state);
  };


  render() {
    console.log('rendering form');
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            label='name'
            name='name'
            id='name'
            value= {this.state.name}
            placeholder='Name'
            type='text'
            onChange={this.handleChanges}
          />

           <input
            label='age'
            name='age'
            id='age'
            value= {this.state.age}
            placeholder='Age'
            type='text'
            onChange={this.handleChanges}
          />

           <input
            label='height'
            name='height'
            id='height'
            value= {this.state.height}
            placeholder='Height'
            type='text'
            onChange={this.handleChanges}
          />

          <button type='submit'>Find Smurfs</button>
        </div>
      </form>
    );
  }
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
  { smurfSubmit }
)(SmurfForm);

