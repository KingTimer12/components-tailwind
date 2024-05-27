
import './index.css'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import store from './store/store'

import App from './App'

// As of React 18
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <App />
    </Provider>
)

