import { GraphQLClient } from "graphql-request";

let client: GraphQLClient | null = null;

export function graphql() {
  if (!client) {
    client = new GraphQLClient(
      process.env.GRAPHQL_URL || "http://localhost:8080/v1/graphql"
    );
  }
  return client;
}

export default graphql;
