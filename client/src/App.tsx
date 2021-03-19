import React from "react";
import TodoList from "./components/TodoList";
import ApolloClient  from "apollo-boost";
import { ApolloProvider } from "@apollo/client";
const client: any = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});
function App() {
  return (
    <div className="container">
      <ApolloProvider client={client}>
        <TodoList />
      </ApolloProvider>
    </div>
  );
}

export default App;
