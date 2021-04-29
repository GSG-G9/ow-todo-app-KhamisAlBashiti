import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const allStoreEnhancers = compose(applyMiddleware(thunk));

const store = createStore(reducers, {}, allStoreEnhancers);

export default store;
