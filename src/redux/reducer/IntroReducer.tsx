import Types from '../types';
type actionType = {
  type: string;
  payload: any;
};
const initState = {
  Total: String,
};

const DataIntro = (state = initState, action: actionType) => {
  const {type, payload} = action;
  switch (type) {
    case Types.ADD_NOTE:
      return {
        ...state,
        Total: payload,
      };
    default:
      return state;
  }
};
export {DataIntro};
