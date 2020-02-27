// gets state object and action
// creates the new object that will be passed to root reducer
// also, make sure the set the prevState to be immutable. just good habit
// PASS THE initial state value to prevState to create default value


const INITIAL_STATE = {
  currentUser : null
}

const userReducer = (state = INITIAL_STATE, action) => {

  switch (action.type){
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      }
    
    default: 
      return state;
  }
}

export default userReducer;
