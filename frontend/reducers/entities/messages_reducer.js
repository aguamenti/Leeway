import { merge } from 'lodash';
import {
  RECEIVE_MESSAGES,
  RECEIVE_MESSAGE,
  REMOVE_MESSAGE
} from '../../actions/messageable_actions';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch( action.type ) {
    case RECEIVE_MESSAGES:
      return action.messages;
    case RECEIVE_MESSAGE:
      return action.message;
    case REMOVE_MESSAGE:
      const newState = merge({}, state);
      delete newState[action.message.id];
      return newState;
    default:
      return state;
  }
};

export default messagesReducer;
