import { useState } from "react";

const JobList = ({ jobs, onApply, submissionStatus }) => {
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h1>Nimble Gravity</h1>
      <h2>Welcome to the Job Board!</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {jobs.map((job) => (
          <div
            key={job.id}
            style={{
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "#3A9AFF",
              borderRadius: "8px",
              padding: "20px",
              width: "100%",
              maxWidth: "300px",
              marginBottom: "20px",
            }}
          >
            <h3>{job.title}</h3>

            <label htmlFor={`repo-${job.id}`}>
              Enter your GitHub Repo URL:
            </label>

            <input
              id={`repo-${job.id}`}
              type="text"
              placeholder="GitHub repo URL"
              style={{
                marginTop: "5px",
                width: "60%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
              onChange={(e) => onChangeInput(e, job.id)}
            />

            <button
              style={{
                marginTop: "10px",
                backgroundColor: "#261CC1",
                color: "#fff",
                border: "none",
                padding: "5px 10px",
                marginLeft: "10px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={() => onSubmit(job.id)}
            >
              Submit
            </button>

            {submissionStatus[job.id] && (
              <p style={{ color: "green" }}>{submissionStatus[job.id]}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
