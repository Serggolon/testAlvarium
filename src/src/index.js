import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import ErrorBoundry from './components/error-boundry';

import App from './components/app';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorBoundry>
                <App/>
            </ErrorBoundry>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


