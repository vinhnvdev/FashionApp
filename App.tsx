import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/redux/store/configureStore';
import Navigations from 'navigation/Navigation';
const App = () => {
  // const [isOne, setIsOne] = useState(String);
  return (
    <StoreProvider store={store}>
      <Navigations />
    </StoreProvider>
    // <Navigations />
  );
};
export default App;
