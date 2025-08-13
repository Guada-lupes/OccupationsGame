export const initialState = {
  login: false,
  name: "",
  unlockedTribe: [],
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
      return {...state,  unlockedTribe: [...state.unlockTribe, action.payload] };
    case "saved_occupation":
        if(state.savedOccupations.includes(action.payload))return state;
      return { ...state, savedOccupations: [...state.savedOccupations, action.payload ]};
    case "reset":
      return initialState;
    default:
      return state;
  }
}
