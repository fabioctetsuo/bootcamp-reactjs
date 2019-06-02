import { combineReducers } from 'redux';
import favorites from './favorites';

const reducers = combineReducers({
  // Remova essa linha depois de adicionar seus ducks
  favorites,
});

export default reducers;
