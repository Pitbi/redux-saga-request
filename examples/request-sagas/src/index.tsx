import * as React from 'react'
import { Provider } from 'react-redux'
import { createStore } from './store'
import { render } from 'react-dom'
import Members from './components/Members'
import Flashes from './components/Flashes'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Members />
        <Flashes />
      </div>
    )
  }
}

render((
  <Provider store={ createStore() }>
    <App />
  </Provider>
), document.getElementById('root'))