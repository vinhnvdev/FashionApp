import Types from '../types';
type actionType = {
  type: string;
  payload: any;
};
const initState = {
  Total: String,
};

const SelectGender = (state = initState, action: actionType) => {
  const {type, payload} = action;
  switch (type) {
    case Types.SELECT_GENDER:
      return {
        ...state,
        gender: payload,
      };
    default:
      return state;
  }
};
export {SelectGender};
