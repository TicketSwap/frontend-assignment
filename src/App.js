import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

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

const App = () => {
  const { data = {}, loading, error } = useQuery(GET_SEARCH_RESULTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>
        Good luck{" "}
        <span aria-label="Thumbs up" role="img">
          👍
        </span>
      </h1>
      <pre style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(data)}</pre>
    </div>
  );
};

export default App;
