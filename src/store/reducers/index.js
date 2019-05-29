import { combineReducers } from 'redux';
import todos from './todos';

const reducers = combineReducers({
  // Remova essa linha depois de adicionar seus ducks
  todos,
});

export default reducers;
