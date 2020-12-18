import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_JOBS } from "../queries/Jobs";

const JobList = (props) => {
  const { loading, error, data } = useQuery(QUERY_JOBS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return data.jobs.map(({ id, title, city }) => (
    <div key={id}>
      <p>{title}</p>
    </div>
  ));
};

JobList.propTypes = {};

export default JobList;
