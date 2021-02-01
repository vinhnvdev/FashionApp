import {combineReducers} from 'redux';
import {DataIntro} from './IntroReducer';
import {SelectGender} from './SelectGenderReducer';
const rootReducer = combineReducers({
  DataIntro,
  SelectGender,
});
export default rootReducer;
