import {TOGGLE_DETAILS} from './actionTypes.js';

export const toggleDetails = templateData => ({
  type: TOGGLE_DETAILS,
  payload: {templateData}
})
