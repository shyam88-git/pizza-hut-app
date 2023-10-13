import React from 'react'

import { Provider } from 'react-redux';
import store from './redux/store';
import PizaHuts from './Component/PizaHuts';

function App() {
  return (
      <div>
        <Provider store={store}>
          <PizaHuts/>
        </Provider>
      </div>
  )
}

export default App