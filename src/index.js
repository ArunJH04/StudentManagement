import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/rootReducer';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from './header';
import { SideNav } from './side-nav';
import { wrapComponent, AddWrapComponentAddStudent } from './redux/wrapperComponent';

const students = createStore(rootReducer);

ReactDOM.render(
  <div>
    <Provider store={students}>
      <BrowserRouter>
        <Header />
        <div className="row">
          <div className="col-3">
            <SideNav />
          </div>
          <div className="col-8">
            <Route path="/list" exact component={wrapComponent} />
            <Route path="/add" exact component={AddWrapComponentAddStudent} />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  </div>,
  document.getElementById('root')
);
