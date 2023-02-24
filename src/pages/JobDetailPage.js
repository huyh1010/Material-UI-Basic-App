import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import { useParams } from "react-router-dom";
import jobs from "../data.json";
import PaymentsIcon from "@mui/icons-material/Payments";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { useNavigate } from "react-router-dom";

function JobDetailPage() {
  const params = useParams();
  const jobId = params.id;
  const job = jobs.find((job) => job.id === jobId);
  const navigate = useNavigate();

  if (!job)
    return <Typography marginTop={3}>Error 404! No Job Found!</Typography>;
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: "500px",
        margin: "5rem auto",
        bgcolor: "white",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14, display: "flex" }}
          justifyContent="center"
          alignItems="center"
          color="black"
          gutterBottom
        >
          <LocationCityIcon /> {job.city}
        </Typography>
        <Typography variant="h5" component="div" sx={{ color: "black" }}>
          {job.title}
        </Typography>
        <Typography
          sx={{ mb: 1.5, display: "flex" }}
          color="black"
          justifyContent="center"
          alignItems="center"
        >
          <PaymentsIcon sx={{ color: "green" }} />{" "}
          {`$${job.salaryLow}-$${job.salaryHigh}`}
        </Typography>
        <Typography variant="body2" textAlign={"left"} sx={{ color: "black" }}>
          {`Years of experience: ${job.yrsXPExpected}`}
          <br />
          {`Job Description: ${job.description}`}
          <br />
          {`Skills required: ${job.skills}`}
          <br />
          {`Date posted: ${job.postedDate.split("T")[0]}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => navigate(`/`)}
          sx={{ margin: "auto", bgcolor: "#FF4500", color: "#fff" }}
          size="small"
        >
          Exit
        </Button>
      </CardActions>
    </Card>
  );
}

export default JobDetailPage;
