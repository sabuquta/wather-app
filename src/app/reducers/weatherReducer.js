// Action types for the weather reducer
export const FETCH_INIT = 'FETCH_INIT';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

// Reducer function to manage weather-fetching state
export const weatherReducer = (state, action) => {
  switch (action.type) {
    case FETCH_INIT:
      return { ...state, isLoading: true, isError: false };
    case FETCH_SUCCESS:
      return { ...state, isLoading: false, weatherData: action.payload, isError: false };
    case FETCH_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      throw new Error('Unexpected action type');
  }
};
