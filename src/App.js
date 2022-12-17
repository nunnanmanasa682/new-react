import React from "react"
import Message from './Message/Message'
import { Provider } from "react-redux"
import {store} from './redux/store'
const App=() => {
   
return(
  <div>
    <provider store={store}>
    <h1>
      App Component</h1>
    <hr/>
    <Message/>
    </provider>
  </div>
)

}
export default App