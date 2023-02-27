import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import BasicPagination from "../components/BasicPagination";
import JobCard from "../components/JobCard";
import jobs from "../data.json";
import { useState } from "react";
function HomePage() {
  const pageSize = 5;
  const totalPage = Math.round(jobs.length / pageSize);
  const [jobList, setJobList] = useState(jobs.slice(0, pageSize));

  const onChange = (page) => {
    const end = pageSize * page;
    const start = pageSize * page - pageSize;
    const newJobList = jobs.slice(start, end);
    setJobList([...newJobList]);
  };

  return (
    <Container>
      <Grid
        container
        rowSpacing={4}
        sx={{ mt: 2 }}
        columnSpacing={4}
        flexWrap={"wrap"}
      >
        {jobList.map((job) => (
          <Grid key={job.id} item xs={12} md={6} lg={4} justifyContent="center">
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
      <BasicPagination totalPage={totalPage} onChange={onChange} />
    </Container>
  );
}

export default HomePage;
