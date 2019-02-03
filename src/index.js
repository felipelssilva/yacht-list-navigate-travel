import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import history from './history';
import { IntlProvider } from 'react-intl';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './containers/App';

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
    <IntlProvider locale="en">
        <Router history={history}>
            <App />
        </Router>
    </IntlProvider>,
    MOUNT_NODE
);

serviceWorker.unregister();
