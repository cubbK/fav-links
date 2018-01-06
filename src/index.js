import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker'

import store from './store'
import { Provider } from 'react-redux'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  link: new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjc3nzjco1x9p0187mlbzo1tf' }),
  cache: new InMemoryCache()
});



ReactDOM.render(
  <ApolloProvider client={ client }>
    <Provider store={ store }>
    <App />
    </Provider>
  </ApolloProvider>, 
document.getElementById('root'))
registerServiceWorker()
