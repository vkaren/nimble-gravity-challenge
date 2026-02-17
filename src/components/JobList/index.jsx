import { useState } from "react";

const JobList = ({ jobs, onApply }) => {
  const [repoUrls, setRepoUrls] = useState({});

  const onChangeInput = (e, jobId) => {
    setRepoUrls({
      ...repoUrls,
      [jobId]: e.target.value,
    });
  };

  const onSubmit = (jobId) => {
    const repoUrl = repoUrls[jobId];

    if (!repoUrl) {
      return;
    }

    onApply({ jobId, repoUrl });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Nimble Gravity</h1>
      <h2>Welcome to the Job Board</h2>

      {jobs.map((job) => (
        <div key={job.id} style={{ marginBottom: "20px" }}>
          <h3>{job.title}</h3>

          <label htmlFor={`repo-${job.id}`}>Enter your GitHub Repo URL:</label>

          <input
            id={`repo-${job.id}`}
            type="text"
            placeholder="GitHub repo URL"
            onChange={(e) => onChangeInput(e, job.id)}
          />

          <button onClick={() => onSubmit(job.id)}>Submit</button>
        </div>
      ))}
    </div>
  );
};

export default JobList;
