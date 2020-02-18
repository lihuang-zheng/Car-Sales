import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

// import redux store, provider dependency
import { createStore } from "redux"
import { Provider } from "react-redux"

// import root reducer
import { rootReducer } from "./reducers"

// create store and passing the rootReducer 
// and provide the store to the app.
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
