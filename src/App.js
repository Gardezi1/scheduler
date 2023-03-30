import { Provider } from "react-redux";

import store from "./redux/store";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    </Provider>
  );
}

export default App;
