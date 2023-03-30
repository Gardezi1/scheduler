import { Provider } from "react-redux";

import Scheduler from "./components/scheduler";
import Load from "./components/load";

import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Scheduler />
      <Load />
    </Provider>
  );
}

export default App;
