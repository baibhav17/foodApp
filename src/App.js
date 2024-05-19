import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import CafeBody from './components/RestaurentBody/CafeBody';
import { Outlet } from 'react-router-dom';
import { createContext, useContext, useEffect, useState } from 'react';
import userContext from './utils/userContext';
import { Provider } from 'react-redux';
import appStore from './utils/State_Management/appStore';

export const dataContext = createContext();
function App() {
  const [cartCountVal, setCartCountVal] = useState(0);
  const { loggedInUser } = useContext(userContext);
  const [userName, setUserName] = useState(loggedInUser);

  useEffect(() => {
    const userData = {
      name: 'SB1700922',
    };
    setUserName(userData.name);
  }, [])
  return (
    <Provider store={ appStore } >
      <dataContext.Provider
        value={{
          cartCountVal,
          setCartCountVal
        }}
      >
        <div className="App">
          {/* ***********+++++++++++ PASSING USER_NAME ONLY IN HEADER FOR REST PLACES(LIKE ABOUT US) THE NAME WILL BE DEFAULT FROM CONTEXT*******++++++++ */}
          <userContext.Provider
            value={{
              loggedInUser: userName,
              setUserName: setUserName,
              userName,
            }}
          >
            <Header />
            <Outlet />
          </userContext.Provider>
        </div>
      </dataContext.Provider>
    </Provider>

  );
}

export default App;
