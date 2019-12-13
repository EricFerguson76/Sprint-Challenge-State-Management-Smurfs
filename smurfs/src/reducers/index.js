import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE
} from '../actions'


const initialState = {
    smurfs: [],
    isFetching: false,
    error: '' 
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START:
          return {
            ...state,
            isFetching: true
          };
        case FETCH_SMURF_SUCCESS:
          return {
            ...state,
            smurfs: action.payload,
            isFetching: false,
            error: ''
          };
        case FETCH_SMURF_FAILURE:
          return {
            ...state,
            smurfs: [],
            isFetching: false,
            error: action.payload
          };
        default:
          return state;
      }
}

export default reducer;