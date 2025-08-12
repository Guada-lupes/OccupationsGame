export const initialState = {
  name: "",
  unlockedTribe: [],
  savedOccupations: [],
};

export function playerReduce(state, action) {
  switch (action.type) {
    case "set_name":
      return { ...state, name: action.payload };
    case "unlock_tribe":
        if(state.unlockedTribe.includes(action.payload))
            return state;
      return {...state,  unlockedTribe: [...state.unlockTribe, action.payload] };
    case "saved_occupation":
        if(state.savedOccupations.includes(action.payload))return state;
      return { ...state, savedOccupations: [state.savedOccupations, action.payload ]};
    case "reset":
      return initialState;
    default:
      return state;
  }
}
