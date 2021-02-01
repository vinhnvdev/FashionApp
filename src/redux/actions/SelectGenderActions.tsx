import Types from '../types';
const selectGender = (payload: any) => {
  return {
    type: Types.SELECT_GENDER,
    payload,
  };
};
export {selectGender};
