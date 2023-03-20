import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";

const defaultState = {cash: 0}

const reducer = (state:any = defaultState, action:any) => {
  switch (action.type)
  {
      case "ADD_CASH":
          return {...state, cash: state.cash}
      case "GET_CASH":

      default:
          return state
  }
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
);


