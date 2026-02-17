import { useEffect, useState } from "react";
import JobList from "../components/JobList";
import Loading from "../components/States/Loading";
import Error from "../components/States/Error";
import { fetchCandidateData, applyToJob } from "../services/api";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [candidate, setCandidate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);

      try {
        const { candidate, jobs } = await fetchCandidateData();
        setCandidate(candidate);
        setJobs(jobs);
      } catch (err) {
        setError(err.message || "Error loading data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleApply = async ({ jobId, repoUrl }) => {
    try {
      await applyToJob({
        uuid: candidate.uuid,
        candidateId: candidate.candidateId,
        applicationId: candidate.applicationId,
        jobId,
        repoUrl,
      });
    } catch (err) {
      setError(err.message || "Error applying to job");
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return <JobList jobs={jobs} onApply={handleApply} />;
};

export default App;
