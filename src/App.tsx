import Router from './Router'
import GlobalStyle from './components/Global/GlobalStyle'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router />
    </Provider>
  )
}

export default App
