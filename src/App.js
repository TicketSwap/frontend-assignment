import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const GET_SEARCH_RESULTS = gql`
  query getSearchResults {
    search(query: "amsterdam", first: 2, entities: [CITY, ARTWORK]) {
      edges {
        node {
          displayLabel
        }
      }
    }
  }
`;

const App = () => (
  <div>
    <h1>
      Good luck{" "}
      <span aria-label="Thumbs up" role="img">
        👍
      </span>
    </h1>
    <pre style={{ whiteSpace: "pre-wrap" }}>
      <Query query={GET_SEARCH_RESULTS}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          return JSON.stringify(data);
        }}
      </Query>
    </pre>
  </div>
);

export default App;
