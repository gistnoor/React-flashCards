import React from 'react';
import ReactDOM from 'react-dom';
import { List, Map } from 'immutable';

import App from './components/App';

const cards = List.of(
    Map({ id: 1, text: 'This is the first card', status: 'active', editing: false }),
    Map({ id: 2, text: 'This is the second card', status: 'active', editing: false }),
    Map({ id: 3, text: 'This is the third card', status: 'active', editing: false })

);

ReactDOM.render(<App />, document.getElementById('app'));
