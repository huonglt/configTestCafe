import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import { Provider } from 'react-redux';
import store from './store';

const x = ENV_NAME;
console.log(`x = ${x}`);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer name={APP_NAME}/>
    </Provider>,
    document.getElementById('app')
);