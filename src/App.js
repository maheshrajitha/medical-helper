import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route , BrowserRouter } from 'react-router-dom';
import Navigationbar from './components/Navigationbar';
import SidenavBarDoctor from './components/SidenavBarDoctor';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { userReducer } from './store/reducers/user.reducer';
import { appoinmentReducer } from './store/reducers/appoinment.reducer';
import thunk from 'redux-thunk';
import Footer from './components/Footer';
import router from './router/Router';
import ChannelDoctor from './Pages/channelling/ChannelDoctor';

//redux store
const store = createStore(combineReducers({ userReducer: userReducer, appoinmentReducer: appoinmentReducer }), applyMiddleware(thunk)); 

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {router.map(route => {
          if (route.doc)
            return (
              <Route path={route.path}>
                <SidenavBarDoctor>
                  <route.component/>
                </SidenavBarDoctor>
              </Route>
            );
          else
            return (
              <Route exact path={route.path}>
                <Navigationbar />
                <route.component/>
                <Footer/>
              </Route>
            );
        })}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
