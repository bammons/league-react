import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './store/store';
import App from './containers/App';
import './styles/index.css';
import configureStore from './store/store';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
