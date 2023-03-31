import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from "react-redux";

import Scheduler from "./components/scheduler";
import Load from "./components/load";

import {store, persistor} from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Scheduler />
        <Load />
      </PersistGate>
    </Provider>
  );
}

export default App;
