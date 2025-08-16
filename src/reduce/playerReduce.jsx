export const initialState = {
  login: false,
  name: "",
  unlockedTribe: ["agricultura"],
  doneChallenge:[],
  savedOccupations: [],
};

export function playerReduce(state, action) {
  switch (action.type) {
        case "log_in":
      return { ...state, login: action.payload };
    case "set_name":
      return { ...state, name: action.payload };
    case "unlocked_tribe":
        if(state.unlockedTribe.includes(action.payload))
            return state;
      return {...state,  unlockedTribe: [...state.unlockedTribe, action.payload] };
    case "saved_occupation":
        if(state.savedOccupations.includes(action.payload))return state;
      return { ...state, savedOccupations: [...state.savedOccupations, action.payload ]};
          case "done_challenge":
        if(state.doneChallenge.includes(action.payload))return state;
      return { ...state, doneChallenge: [...state.doneChallenge, action.payload ]};
    case "reset":
      return initialState;
    default:
      return state;
  }
}
