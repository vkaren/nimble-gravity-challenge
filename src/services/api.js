const email = "karenperarnau@gmail.com";

const BASE_URL =
  "https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net";

const fetchCandidateData = async () => {
  try {
    const resCandidate = await fetch(
      `${BASE_URL}/api/candidate/get-by-email?email=${email}`,
    );

    if (!resCandidate.ok) {
      throw new Error("Error fetching candidate");
    }

    const candidateData = await resCandidate.json();

    const resJobs = await fetch(`${BASE_URL}/api/jobs/get-list`);

    if (!resJobs.ok) {
      throw new Error("Error fetching jobs");
    }

    const jobsData = await resJobs.json();

    return { candidate: candidateData, jobs: jobsData };
  } catch (err) {
    console.error(err);
    throw new Error(err.message || "Error loading data");
  }
};

const applyToJob = async ({
  uuid,
  candidateId,
  applicationId,
  jobId,
  repoUrl,
}) => {
  try {
    const res = await fetch(`${BASE_URL}/api/candidate/apply-to-job`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uuid,
        candidateId,
        applicationId,
        jobId,
        repoUrl,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Apply failed");
    }

    return await res.json();
  } catch (err) {
    console.error(err);
    throw new Error(err.message || "Error applying to job");
  }
};

export { fetchCandidateData, applyToJob };
