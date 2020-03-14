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
import SidenavBarReceptionist from './components/SidenavBarReceptionist';
import MainLayout from './layouts/MainLayout';
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
          else if (route.reception) {
            return (
              <Route exact path={route.path}>
                <SidenavBarReceptionist>
                  <route.component/>
                </SidenavBarReceptionist>
                <Footer/>
              </Route>
            );
          }
          else
            return (
              <Route exact path={route.path}>
                <MainLayout>
                  <route.component/>
                </MainLayout>
              </Route>
            );
        })}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
