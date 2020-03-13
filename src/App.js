import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route , BrowserRouter } from 'react-router-dom';
import Navigationbar from './components/Navigationbar';
import ChannelDoctor from './Pages/ChannelDoctor';
import SidenavBarDoctor from './components/SidenavBarDoctor';
import MyChannellings from './Pages/MyChannellings';
import MyAppoinments from './Pages/MyAppoinments';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { userReducer } from './store/reducers/user.reducer';
import { appoinmentReducer } from './store/reducers/appoinment.reducer';
import thunk from 'redux-thunk';
import PutAppoinment from './Pages/channelling/PutAppoinment';
import Login from './Pages/auth/Login';
import Footer from './components/Footer';

//redux store
const store = createStore(combineReducers({ userReducer: userReducer, appoinmentReducer: appoinmentReducer }), applyMiddleware(thunk)); 

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path={'/'} exact>
          <Navigationbar/>
          <ChannelDoctor />
          <Footer marginTop={'25%'}/>
        </Route>
        <Route path={'/doctor'} exact>
            <SidenavBarDoctor>
                <MyChannellings/>
            </SidenavBarDoctor>
        </Route>
        <Route path={'/channel/:docId'}>
          <Navigationbar/>
          <PutAppoinment/>
        </Route>
        <Route path={'/login'} exact>
          <Navigationbar />
          <Login />
          <Footer/>
        </Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
