import React from "react"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import ProductList from "./components/ProductList"
import 'sanitize.css'

const client = new ApolloClient({
  uri: 'http://localhost:3001/',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ProductList />
    </ApolloProvider>
  );
}

export default App
