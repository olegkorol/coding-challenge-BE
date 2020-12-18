import { gql } from "apollo-boost";

const QUERY_JOBS = gql`
  query fetchJobs {
    jobs {
      id
      title
      city
    }
  }
`;

export { QUERY_JOBS };
