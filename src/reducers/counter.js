const initialState = { data: 10 };
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { data: state.data + action.payload };

    case "DECREMENT":
      return { data: state.data - action.payload };
    default:
      return state;
  }
};

export default counterReducer;
//reducers
