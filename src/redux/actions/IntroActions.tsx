import Types from '../types';
const addnote = (payload: any) => {
  return {
    type: Types.ADD_NOTE,
    payload,
  };
};

const deletenote = (payload: any) => {
  return {
    type: Types.DELETE_NOTE,
    payload,
  };
};
export {addnote, deletenote};
