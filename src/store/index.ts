import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { responsiveStoreEnhancer } from 'redux-responsive';
import createRootReducer from '../reducers';
import apiMiddleware from '../middleware/api';

export const history = createBrowserHistory();

const defaultState = {};

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['appTime', 'router', 'browser', 'updateServiceWorker', 'online'],
};

const persistedReducer = persistReducer(
  persistConfig,
  createRootReducer(history),
);

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
const store = createStore(
  persistedReducer,
  defaultState,
  composeEnhancers(
    responsiveStoreEnhancer,
    applyMiddleware(routerMiddleware(history), reduxThunk, apiMiddleware),
  ),
);

export default store;
